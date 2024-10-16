import {
  PermissionsAndroid,
  StatusBar,
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppToolBar from '../../components/AppToolBar';
import RoundButtonComp from '../../components/RoundButtonComp';
import GetLocation from 'react-native-get-location';

const Welcome = ({navigation}) => {
  const [PGranted, setPGranted] = useState();
  const [shopList, setShopList] = useState([]);
  useEffect(() => {
    //checkLocationPermission();
  }, []);

  async function checkLocationPermission() {
    let granted = await getLocationPermission();
    setPGranted(granted);
    if (granted) {
      getCurrentLocation();
    }
  }

  async function getCurrentLocation() {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        console.log('location', location);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }

  async function getLocationPermission() {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ).catch(err => console.log(err));
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }

  const Shop = ({item}) => {
    return (
      <View
        style={{
          margin: 5,
          elevation: 3,
          padding: 5,
          backgroundColor: '#F2F4F4',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 0.3}}>
            <Image
              style={{width: '100%', height: 100}}
              source={{
                uri: 'https://static.vecteezy.com/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg',
              }}
            />
          </View>
          <View style={{flex: 0.7, paddingHorizontal: 5}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              {item.name}
            </Text>
            <Text style={{}}>{item.address.toString().slice(0, 50)}</Text>
          </View>
        </View>
        <View
          style={{padding: 5, justifyContent: 'center', alignItems: 'center'}}>
          <Text>More Details</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#2E86C1'} />
      <AppToolBar navigation={navigation} label={'Nearby Stores'} />
      {PGranted ? (
        <View style={{flex: 1}}>
          {shopList.length > 0 ? (
            <FlatList
              data={shopList}
              keyExtractor={list => list.id.toString()}
              renderItem={item => <Shop item={item} />}
            />
          ) : null}
        </View>
      ) : (
        <View
          style={{flex: 1, justifyContent: 'center', paddingHorizontal: 15}}>
          <View style={{backgroundColor: '#F2F4F4', padding: 10, elevation: 2}}>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              Location is Required
            </Text>
            <Text style={{marginTop: 5}}>Please Allow Location</Text>
          </View>
          <RoundButtonComp
            lable={'Allow'}
            marginTop={20}
            onPress={() => checkLocationPermission()}
          />
        </View>
      )}
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
