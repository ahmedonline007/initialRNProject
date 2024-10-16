import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RoundButtonComp from '../../components/RoundButtonComp';
import FullRoundButtonComp from '../../components/FullRoundButtonComp';
import {_signInWithGoogle} from '../../config/firebase/GoogleSignIn';
import {_storeIntoAsyncStorage} from '../../config/asyncStorage';

const SignInScreen = ({navigation}) => {
  async function googleSignIn() {
    _signInWithGoogle().then(data => {
      if (!data) {
        console.log('No Data');
        return;
      }
      console.log('Data', data);
      _storeIntoAsyncStorage('user', JSON.stringify(data));
      navigation.navigate('Welcome');
    });
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#fffdee'} />
      <View style={{flex: 0.5}}>
        <Image
          source={require('../../assets/login.jpg')}
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={{flex: 0.5, backgroundColor: '#fffdee'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Hello
        </Text>
        <Text
          style={{
            textAlign: 'center',
          }}>
          Welcome to our Ecommerce App
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'center',
          }}>
          <RoundButtonComp
            lable={'Login'}
            width={120}
            onPress={() => navigation.navigate('SignUp')}
          />
          <RoundButtonComp
            lable={'Sign Up'}
            border={true}
            width={120}
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 20,
            paddingBottom: 20,
            justifyContent: 'flex-end',
          }}>
          <Text style={{textAlign: 'center', marginTop: 15}}>
            Or Via Social media Account
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <FullRoundButtonComp
              image={require('../../assets/google.jpg')}
              bg={'#e54545'}
              OnPress={googleSignIn}
            />
            <FullRoundButtonComp
              image={require('../../assets/Facebook.png')}
              bg={'#2d75e8'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
