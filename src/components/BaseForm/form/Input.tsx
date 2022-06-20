import React from 'react';
import _ from 'lodash';
import { connect, mapReadPretty, mapProps } from '@formily/react'
import { Text } from 'react-native';
import { Input as NBInput } from 'native-base'

export interface IBaseInput {
  selfInvalid?: boolean, // 是否无效
  selfDisplay: boolean, // 是否禁用
  required?: boolean, // 是否必填
  onChange: Function, // formily自动桥接方法
  placeholder: string, // 输入提示
}

const BaseInput: React.FC<React.PropsWithChildren<IBaseInput>> = props => {
  const { placeholder, onChange, selfDisplay, required, selfInvalid } = props
  return <NBInput
  isInvalid={selfInvalid}
  placeholder={placeholder}
  isDisabled={selfDisplay}
  isRequired={required}
  onChangeText={(e) => onChange(e)} />
}
export const Input = connect(
  BaseInput,
  mapProps((props, field) => {
    return { ...field, ...props }
  }),
  mapReadPretty(({ value }) => <Text>{value}</Text>)
)
