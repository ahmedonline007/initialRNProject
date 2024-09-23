import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';
import {themeColors} from '../theme';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {selectRestaurant} from '../slices/restaurantSlice';
import {emptyCart} from '../slices/cartSlice';

const Delivery = () => {
  const restaurants = useSelector(selectRestaurant);
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const cancelOrder = () => {
    navigation.navigate('Home');
    dispatch(emptyCart());
  };

  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className="flex-1"
        mapType="standard">
        <Marker
          coordinate={{
            latitude: restaurants.lat,
            longitude: restaurants.lng,
          }}
          title={restaurants.name}
          description={restaurants.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>
      <View className="rounded-t-3xl mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl text-gray-700 font-extrabold">
              20 - 30 Minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Your Order is owm Way!
            </Text>
          </View>
          <Image
            className="w-24 h-24"
            source={require('../assets/images/biky.png')}
          />
        </View>
        <View
          style={{backgroundColor: themeColors.bgColor(0.8)}}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
          <View
            className="p-1 rounded-full"
            style={{backgroundColor: 'rgb(255,255,255,0.4)'}}>
            <Image
              className="h-16 w-16 rounded-full"
              source={require('../assets/images/biky.png')}
            />
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Ahmed Salah</Text>
            <Text className="font-semibold text-white">Delivery</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Feather
                name={'phone'}
                size={24}
                style={{backgroundColor: themeColors.bgColor(1)}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelOrder}
              className="bg-white p-2 rounded-full">
              <Feather
                name={'x'}
                size={24}
                style={{backgroundColor: themeColors.bgColor(1)}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({});
