import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect, mapProps } from '@formily/react'

export interface IFooter {
	style: object
	children: React.FC
  loading: boolean
}

const Footer = (props: IFooter) => {
  if (props.loading) {
    return <View style={{
      flex: 1,
      ...props.style
    }}/>
  }

  return <View style={styles.footerView}>{props.children}</View>;
};

const styles = StyleSheet.create({
  footerView: {
    paddingBottom: 15,
  },
});

export default Footer;

export const FormFooter = connect(
  Footer,
  mapProps((props, field) => {
    return { ...field, ...props }
  })
)