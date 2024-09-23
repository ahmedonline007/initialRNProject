import {StyleSheet, Image, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const OrderPrepairing = () => {
  const navigate = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigate.navigate('Delivery');
    }, 3000);
  });

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        className="h-80 w-80"
        source={require('../assets/images/Delivery.png')}
      />
    </View>
  );
};

export default OrderPrepairing;

const styles = StyleSheet.create({});
