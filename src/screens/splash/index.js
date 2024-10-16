import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {_getFromAsyncStorage} from '../../config/asyncStorage';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    checkUser();
  }, 3000);

  async function checkUser() {
    const value = await _getFromAsyncStorage('user');
    if (!value) {
      navigation.replace('SignIn');
    } else {
      navigation.replace('SideNavigation');
    }
  }

  return (
    <ImageBackground
      source={require('../../assets/splash.png')}
      resizeMode="cover"
      style={{flex: 1, padding: 15}}>
      <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
        Ecommerce APP
      </Text>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
