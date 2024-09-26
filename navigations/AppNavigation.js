import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Main">
        <Stack.Screen name="Main" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
