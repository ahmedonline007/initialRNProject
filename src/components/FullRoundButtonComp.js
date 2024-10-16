import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const FullRoundButtonComp = ({image, bg, OnPress}) => {
  return (
    <TouchableOpacity onPress={() => OnPress()}>
      <View
        style={{
          backgroundColor: bg,
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
          marginLeft: 10,
        }}>
        <Image source={image} style={{width: 20, height: 20}} />
      </View>
    </TouchableOpacity>
  );
};

export default FullRoundButtonComp;

const styles = StyleSheet.create({});
