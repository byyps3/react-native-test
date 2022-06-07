import React from 'react';
import { View } from 'react-native'
import _ from 'lodash';
import { connect, mapProps } from '@formily/react'
import { FormControl as NBFormControl, WarningOutlineIcon } from 'native-base'

const BaseForm: React.FC<React.PropsWithChildren<any>> = props => {
  const { selfInvalid, selfDisplay, required, title, children, description, selfErrors } = props

  return <NBFormControl
  isInvalid={selfInvalid}
  isDisabled={selfDisplay == 'hidden' || selfDisplay == 'visible'}
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
    <NBFormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
      {selfErrors[0]}
    </NBFormControl.ErrorMessage>
  </NBFormControl>
}

export const FormControl = connect(
  BaseForm,
  mapProps((props, field) => {
    return { ...field, ...props }
  })
)