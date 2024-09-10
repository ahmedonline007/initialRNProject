import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: 45,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 4,
      }}>
      <View style={{flexDirection: 'row', margin: 5}}>
        <AntDesign name="youtube" size={32} color="red" />
        <Text style={{fontSize: 22, marginLeft: 5}}>YouTube</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: 150,
          margin: 5,
        }}>
        <Ionicons name="videocam-sharp" size={32} color="#212121" />
        <Ionicons name="search-sharp" size={32} color="#212121" onPress={() => navigation.navigate("Search")}/>
        <MaterialCommunityIcons
          name="account-circle"
          size={32}
          color="#212121"
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
