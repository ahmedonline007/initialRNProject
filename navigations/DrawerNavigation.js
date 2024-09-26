import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BottomTabNavigation from './BottomTabNavigation';
import {
  Address,
  Favourite,
  Notifications,
  Orders,
  PaymentMethod,
  Profile,
} from '../screens';
import {SafeAreaView} from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 200,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <Ionicons name={'home-outline'} size={70} color={'black'} />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Ahmed Salah
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                }}>
                Full-Stack Developer
              </Text>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
          width: 250,
        },
        headerStyle: {
          backgroundColor: 'white',
        },
        headerShown: false,
        headerTintColor: 'black',
        drawerLabelStyle: {
          color: 'black',
          fontSize: 14,
          marginLeft: 50,
        },
      }}>
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: 'Home',
          title: 'Home',
          headerShadowVisible: false,
          drawerIcon: () => {
            <Ionicons name={'home-outline'} size={24} color={'black'} />;
          },
        }}
        component={BottomTabNavigation}
      />
      <Drawer.Screen
        name="Orders"
        options={{
          drawerLabel: 'Orders',
          title: 'Orders',
          headerShadowVisible: false,
          drawerIcon: () => {
            <MaterialCommunityIcons
              name={'shopping-outline'}
              size={24}
              color={'#0d6efd'}
            />;
          },
        }}
        component={Orders}
      />
      <Drawer.Screen
        name="Search"
        options={{
          drawerLabel: 'Search',
          title: 'Search',
          headerShadowVisible: false,
          drawerIcon: () => {
            <Ionicons name={'search-outline'} size={24} color={'#0d6efd'} />;
          },
        }}
        component={Orders}
      />
      <Drawer.Screen
        name="Wishlist"
        options={{
          drawerLabel: 'Wishlist',
          title: 'Wishlist',
          headerShadowVisible: false,
          drawerIcon: () => {
            <MaterialIcons
              name={'favorite-outline'}
              size={24}
              color={'#0d6efd'}
            />;
          },
        }}
        component={Favourite}
      />
      <Drawer.Screen
        name="Delivery Address"
        options={{
          drawerLabel: 'Delivery Address',
          title: 'Delivery Address',
          headerShadowVisible: false,
          drawerIcon: () => {
            <Ionicons name={'location-outline'} size={24} color={'#0d6efd'} />;
          },
        }}
        component={Address}
      />
      <Drawer.Screen
        name="Payment Methods"
        options={{
          drawerLabel: 'Payment Methods',
          title: 'Payment Methods',
          headerShadowVisible: false,
          drawerIcon: () => {
            <MaterialCommunityIcons
              name={'credit-card-check'}
              size={24}
              color={'#0d6efd'}
            />;
          },
        }}
        component={PaymentMethod}
      />
      <Drawer.Screen
        name="Notifications"
        options={{
          drawerLabel: 'Notifications',
          title: 'Notifications',
          headerShadowVisible: false,
          drawerIcon: () => {
            <MaterialIcons
              name={'circle-notifications'}
              size={24}
              color={'#0d6efd'}
            />;
          },
        }}
        component={Notifications}
      />
      <Drawer.Screen
        name="Help"
        options={{
          drawerLabel: 'Help',
          title: 'Help',
          headerShadowVisible: false,
          drawerIcon: () => {
            <MaterialCommunityIcons
              name={'help-circle-outline'}
              size={24}
              color={'#0d6efd'}
            />;
          },
        }}
        component={Profile}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
