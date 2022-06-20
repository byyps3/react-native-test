import React from 'react';
import {View} from 'react-native'
import { connect, mapProps } from '@formily/react'

export interface IHeader {
	style: object
	children: React.FC
}

const Header = (props: IHeader) => {
	return (
		<View style={props.style}>{props.children}</View>
	)
};

export default Header;

export const FormHeader = connect(
  Header,
  mapProps((props, field) => {
    return { ...field, ...props }
  })
)