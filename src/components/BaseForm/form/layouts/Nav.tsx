import React from 'react';
import _ from 'lodash';
import { View, Text, TouchableOpacity } from 'react-native';
import { ArrowBackIcon } from 'native-base'
import { connect, mapProps } from '@formily/react'

interface IrightMenus {
  onPress: Function
  title: string
}

export interface INav {
  title: string,
  canGoBack: boolean,
  rightMenus?: Array<IrightMenus>,
  numberOfLines: number,
}

const Nav = (props: INav) => {
  let backgroundColor = 'white';
  return (
    <View
      style={{
        flex: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 45,
        backgroundColor: backgroundColor,
        zIndex: 1,
      }}>
      <View
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {props.canGoBack ? (
          <TouchableOpacity
            // onPress={Actions.pop}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 8,
              marginLeft: 2,
            }}>
            <ArrowBackIcon
              name='arrow-back'
              // color='white'
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
          color: 'red',
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