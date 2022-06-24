import React, { useState } from 'react';
import _ from 'lodash';
import {
  ScrollView,
  RefreshControl,
  Image,
  View,
  Dimensions,
  Button
} from 'react-native';
import Loading from '../../base/Loading';
import Empty from '../../base/Empty';
import { connect, mapProps } from '@formily/react'

export interface IBody {
	style: object
	children: React.FC
  loading: boolean
  empty: boolean
  onRefresh: Function
  showBackImage: boolean
  keyTaps: boolean | "always" | "never" | "handled" | undefined
  static: boolean
}

const Body = (props: IBody) => {
  const [refreshing, setRefreshing] = useState(false);

  const backImage = (
    <Image
      source={require('../../../../assets/images/blue.png')}
      style={{
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: 360,
        flex: 1,
        zIndex: -1,
      }}
    />
  );

  if (props.loading) {
    return (
      <View style={{
        flex: 1,
        ...props.style
      }}>
        < Loading />
      </View>)
  }

  if (props.empty) {
    return (
      <Empty
        extra={
          <Button
            title="刷新"
            onPress={() => props.onRefresh}
          />
        }
      />
    );
  }

  if (props.static) {
    return (
      <View
        style={{
          flex: 1,
          ...props.style,
        }}>
        {props.showBackImage ? backImage : null}
        {props.children}
      </View>
    );
  }

  return (
    <View style={{ flex: 1, ...props.style }}>
      {props.showBackImage ? backImage : null}
      <ScrollView
        style={{ position: 'relative', ...props.style }}
        keyboardShouldPersistTaps={props.keyTaps}
        refreshControl={
          props.onRefresh ? (
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                if (_.isFunction(props.onRefresh)) props.onRefresh();
              }}
            />
          ) : undefined
        }>
        <View>{props.children}</View>
      </ScrollView>
    </View>
  );
};

Body.defaultProps = {
  static: false,
  loading: false,
  empty: false,
  showBackImage: false,
  scrollEnabled: true,
  keyTaps: "never" as "never"
};

export default Body;

export const FormBody = connect(
  Body,
  mapProps((props, field) => {
    return { ...field, ...props }
  })
)