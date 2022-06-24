import React from 'react';
import _ from 'lodash';
import { View, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { ArrowBackIcon } from 'native-base'
import { connect, mapProps } from '@formily/react'
import _Const from '../../../../const/_Const';
import { useNavigationState, useNavigation } from '@react-navigation/native';

interface IrightMenus {
  onPress: Function
  title: string
}

export interface INav {
  title: string,
  canGoBack: boolean,
  rightMenus?: Array<IrightMenus>,
  numberOfLines: number,
  backgroundColor: string
  navigation?: any
}

const Nav = (props: INav) => {
  const isDarkMode = useColorScheme() !== 'dark';
  let backgroundColor = null
  if (isDarkMode) backgroundColor = props.backgroundColor || _Const.MainColor;
  else backgroundColor = 'white';
  const routesLength = useNavigationState(state => state.routes.length);
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 45,
        backgroundColor,
        zIndex: 1,
      }}>
      <View
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {props.canGoBack && routesLength > 1 ? (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 8,
              marginLeft: 2,
            }}>
            <ArrowBackIcon
              name='arrow-back'
              color={isDarkMode ? 'white' : '#333'}
              size={18}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      <Text
        numberOfLines={props.numberOfLines}
        style={{
          flex: 1,
          width: '100%',
          color: isDarkMode ? 'white' : '#333',
          paddingLeft: 12,
          paddingRight: 6,
          fontSize: 16,
          textAlign: 'left',
          textAlignVertical: 'top',
        }}>
        {props.title}
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        {_.isEmpty(props.rightMenus) ? null : (
          <React.Fragment>
            {_.map(props.rightMenus, (item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 8,
                  }}
                  onPress={()=>item.onPress}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 14,
                    }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </React.Fragment>
        )}
      </View>
    </View>
  );
};

Nav.defaultProps = {
  numberOfLines: 1,
  canGoBack: true,
};

export default Nav;

export const FormNav = connect(
  Nav,
  mapProps((props, field) => {
    return { ...field, ...props }
  })
)