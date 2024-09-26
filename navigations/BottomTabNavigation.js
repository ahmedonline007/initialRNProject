import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Message, Orders, Profile, Search} from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLable: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: Platform.OS === 'ios' ? 90 : 60,
    backgroundColor: 'white',
  },
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="DrawerHome"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused ? '#9A9A9A' : '#0d6efd'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MaterialCommunityIcons
                name={focused ? 'shopping' : 'shopping-outline'}
                size={24}
                color={focused ? '#9A9A9A' : '#0d6efd'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#0d6efd',
                  height: Platform.OS == 'ios' ? 70 : 60,
                  width: Platform.OS == 'ios' ? 70 : 60,
                  top: Platform.OS == 'ios' ? -20 : -30,
                  borderRadius: Platform.OS == 'ios' ? 35 : 30,
                  borderWidth: 2,
                  borderColor: 'white',
                }}>
                <Ionicons name={'search-outline'} size={24} color={'white'} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name={
                  focused
                    ? 'chatbubble-ellipses'
                    : 'chatbubble-ellipses-outline'
                }
                size={24}
                color={focused ? '#9A9A9A' : '#0d6efd'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <FontAwesome
                name={focused ? 'user-circle' : 'user-circle-o'}
                size={24}
                color={focused ? '#9A9A9A' : '#0d6efd'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
