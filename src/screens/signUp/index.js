import {StatusBar, StyleSheet, Text, View, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import InputFieldComp from '../../components/InputFieldComp';
import RoundButtonComp from '../../components/RoundButtonComp';
// import auth from '@react-native-firebase/auth';

const SignUpScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function SignUp() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Please Fill Email');
      return;
    }
    if (!password) {
      Alert.alert('Please Fill Password');
      return;
    }
    // auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(data => {})
    //   .catch(err => {
    //     Alert.alert('Error', err.message, [
    //       {
    //         text: 'Cancel',
    //         onPress: () => console.log('Cancel'),
    //         style: 'cancel',
    //       },
    //       {
    //         text: 'Ok',
    //         onPress: () => console.log('Ok Pressed'),
    //       },
    //     ]);
    //   });
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 15}}>
      <StatusBar backgroundColor={'white'} />
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
            fontSize: 30,
            color: 'black',
            fontWeight: 'bold',
            marginLeft: 10,
          }}>
          SignUp
        </Text>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <InputFieldComp
            placeholder={'Email'}
            keyboardType={'email-address'}
            onChangeText={text => setEmail(text)}
          />
          <InputFieldComp
            placeholder={'Password'}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
          <RoundButtonComp
            lable={'SignUp'}
            marginTop={30}
            onPress={() => {
              SignUp();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
