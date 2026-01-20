import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';

const ScreenWrapper = ({children}) => {
  let statusBarHeight = StatusBar.currentHeight
    ? StatusBar.currentHeight
    : Platform.OS === 'ios'
    ? 30
    : 0;
    // style={{paddingTop: statusBarHeight}} فى حالة IOS
  return <View>{children}</View>;
};

const styles = StyleSheet.create({});

export default ScreenWrapper;
