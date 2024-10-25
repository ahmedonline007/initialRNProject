import React, {useEffect} from 'react';
import SplashScreen from './src/screens/splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './src/screens/signin/signin';
import SignUpScreen from './src/screens/signUp';
import Welcome from './src/screens/welcome';
import SideNavigation from './src/screens/SideNavigation';
import messaging from '@react-native-firebase/messaging';
import {Alert, PermissionsAndroid} from 'react-native';
const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    PushNotification();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    // Register background handler
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
    return unsubscribe;
  }, []);

  async function PushNotification() {
    let fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log('token', fcmToken);
    }
  }

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
