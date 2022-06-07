import React from 'react';
import _ from 'lodash';
import { FlexAlignType, TextInput, View, Platform } from 'react-native';
import { connect, mapReadPretty, mapProps } from '@formily/react'
import { Text } from 'react-native-svg';
import { Input } from 'native-base'

// interface IString {
//   readOnly?: Boolean
//   onChange?: Function
//   suffix?: Object
// }

// const style: { flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse', alignItems: FlexAlignType, height?: string | number } = {
//   flexDirection: 'row',
//   alignItems: 'center',
// }

// if (Platform.OS === 'ios') {
//   style.height = 50
// }

// const Input: React.FC<IString> = props => {

//   const onChange = (val: string) => {
//     if (_.isFunction(props.onChange)) {
//       props.onChange(val)
//     }
//   }

//   return (
//     <View style={style}>
//       <TextInput
//         onChangeText={onChange}
//         style={{
//           flex: 1,
//           fontSize: 14,
//           textAlign: 'left',
//           paddingHorizontal: 0,
//           color: '#333',
//           height: 50
//         }}
//         placeholder="请输入..."
//         placeholderTextColor="gray"
//         editable={!props.readOnly}
//       />
//     </View>
//   )
// }

export const InputRef = connect(
  Input,
  mapProps({}, (props, field) => {
    return { ...props }
  }),
  mapReadPretty(({ value }) => <Text>{value}</Text>)
)