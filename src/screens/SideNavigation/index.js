import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import Welcome from '../welcome';
import CustomDrawerContent from './CustomDrawerContent';
import MyShopScreen from '../MyShop/MyShopScreen';

const Drawer = createDrawerNavigator();
const SideNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="WelcomeScreen"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveTintColor: 'black',
        drawerActiveBackgroundColor: 'white',
        drawerInactiveTintColor: 'white',
        // drawerPosition: 'right',
      }}>
      <Drawer.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="MyShop"
        component={MyShopScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default SideNavigation;

const styles = StyleSheet.create({});
