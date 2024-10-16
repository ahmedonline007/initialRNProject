import React from 'react';
import SplashScreen from './src/screens/splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './src/screens/signin/signin';
import SignUpScreen from './src/screens/signUp';
import Welcome from './src/screens/welcome';
import SideNavigation from './src/screens/SideNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'Splash'}
            component={SplashScreen}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name={'SideNavigation'}
            component={SideNavigation}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name={'SignIn'}
            component={SignInScreen}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name={'SignUp'}
            component={SignUpScreen}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name={'Welcome'}
            component={Welcome}
            options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
