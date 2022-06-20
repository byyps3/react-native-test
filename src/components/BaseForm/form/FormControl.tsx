import React from 'react';
import { View } from 'react-native'
import _ from 'lodash';
import { connect, mapProps } from '@formily/react'
import { FormControl as NBFormControl, WarningOutlineIcon } from 'native-base'

export interface IBaseForm {
  selfInvalid?: boolean, // 是否无效
  selfDisplay: boolean, // 是否禁用
  required?: boolean, // 是否必填
  title: string, // 表单项label
  description?: string, // 表单项说明
  children: React.Component, // formily自动桥接子集
  selfErrors?: Array<string>, // formily自动桥接错误提示
}

const BaseForm: React.FC<React.PropsWithChildren<IBaseForm>> = props => {
  const { selfInvalid, selfDisplay, required, title, children, description, selfErrors } = props

  return <NBFormControl
  isInvalid={selfInvalid}
  isDisabled={selfDisplay}
  isRequired={required}
  style={{
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  }}>
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <NBFormControl.Label style={{
        width: '25%',
      }}>{title}</NBFormControl.Label>
      <View style={{
        width:'70%',
      }}>{children}</View>
    </View>
    <NBFormControl.HelperText>
      {description}
    </NBFormControl.HelperText>
    {selfErrors?<NBFormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
      {selfErrors[0]}
    </NBFormControl.ErrorMessage>:null}
  </NBFormControl>
}

export const FormControl = connect(
  BaseForm,
  mapProps((props, field) => {
    return { ...field, ...props }
  })
)