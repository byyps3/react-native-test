import React from 'react';
import { View, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import Nav, { INav } from './Nav';
import Header, { IHeader } from './Header';
import Body, { IBody } from './Body';
import Footer, { IFooter } from './Footer';
import _ from 'lodash';
import _UITools from '../../../../tools/_UITools';
import _Const from '../../../../const/_Const';
import { connect, mapProps } from '@formily/react'

export interface ILayout {
  barColor: string
  hideStatusBar: boolean
  panHandlers?: string
  children?: string
  theme?: string
}
export const MyStatusBar: React.FC<ILayout> = props => {
  const isDarkMode = useColorScheme() !== 'dark';
  const backgroundColor = props.barColor
    ? props.barColor
    : isDarkMode
      ? _Const.MainColor
      : 'white';

  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        hidden={props.hideStatusBar}
      />
    </View>
  );
};

const Layout: React.FC<ILayout> & {
  Nav: React.FC<INav>;
  Body: React.FC<IBody>;
  Footer: React.FC<IFooter>;
  Header: React.FC<IHeader>;
} = props => {
  return (
    <React.Fragment>
      <MyStatusBar
        barColor={props.barColor}
        hideStatusBar={props.hideStatusBar}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          height: '100%',
          backgroundColor: "#e9e9e9"
        }}
        {...(props?.panHandlers ?? {})}>
        {props.children}
      </View>
    </React.Fragment>
  );
};

Layout.Nav = Nav;
Layout.Body = Body;
Layout.Header = Header;
Layout.Footer = Footer;

const styles = StyleSheet.create({
  statusBar: {
    height: _UITools.getStatusBarHeight(),
  },
});

export const FormLayout = connect(
  Layout,
  mapProps((props, field) => {
    return { ...field, ...props }
  })
)