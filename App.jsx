import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';
import Search from './src/screens/Search';
import VideoPlayer from './src/screens/VideoPlayer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tabs.Navigator
      // screenOptions={{headerShown: false}}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => { //ممكن عند الضغط على الايكون ممكن نبدلة بايكون تانى وموجود المثال على موقع
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Explore') {
            iconName = 'search-outline';
          } else if (route.name === 'Subscribe') {
            iconName = 'albums-outline';
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tabs.Screen
        name="Home"
        component={Home}
        // options={{
        //   tabBarIcon: ({color, size}) => (
        //     <Icon name="home-outline" color={color} size={size} />
        //   ),
        // }}
      />
      <Tabs.Screen
        name="Explore"
        component={Explore}
        // options={{
        //   tabBarIcon: ({color, size}) => (
        //     <Icon name="search-outline" color={color} size={size} />
        //   ),
        // }}
      />
      <Tabs.Screen
        name="Subscribe"
        component={Subscribe}
        // options={{
        //   tabBarIcon: ({color, size}) => (
        //     <Icon name="albums-outline" color={color} size={size} />
        //   ),
        // }}
      />
    </Tabs.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="rootHome" component={RootHome} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
