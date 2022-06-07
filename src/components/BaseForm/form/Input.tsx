import React from 'react';
import _ from 'lodash';
import { connect, mapReadPretty, mapProps } from '@formily/react'
import { Text } from 'react-native';
import { Input as NBInput } from 'native-base'

const BaseInput: React.FC<React.PropsWithChildren<any>> = props => {
  const { placeholder, onChange } = props
  return <NBInput
  placeholder={placeholder}
  onChangeText={onChange} />
}
export const Input = connect(
  BaseInput,
  mapProps((props, field) => {
    return { ...field, ...props }
  }),
  mapReadPretty(({ value }) => <Text>{value}</Text>)
)
