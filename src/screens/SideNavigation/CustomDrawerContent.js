import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {_getFromAsyncStorage} from '../../config/asyncStorage';

const CustomDrawerContent = props => {
  const [user, setUser] = useState();

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const userData = await _getFromAsyncStorage('user');
    if (userData) {
      let userJson = JSON.parse(userData);
      console.log(userJson);
      setUser(userJson);
    }
  }

  return (
    <View style={{flex: 1, backgroundColor: '#2E86C1'}}>
      <View style={{padding: 15}}>
        <Text style={{fontWeight: 'bold'}}>
          {user != undefined ? user.data.user.name : ''}
        </Text>
        <Text>{user != undefined ? user.data.user.email : ''}</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({});
