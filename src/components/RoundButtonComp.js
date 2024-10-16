import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const RoundButtonComp = ({
  lable,
  border = false,
  onPress,
  width = '100%',
  marginTop = 0,
}) => {
  return (
    <TouchableOpacity style={{marginTop: marginTop}} onPress={() => onPress()}>
      <View
        style={{
          backgroundColor: border ? 'white' : '#034ef7',
          width: width,
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 20,
          marginLeft: 10,
          borderColor: 'black',
          borderWidth: border ? 1 : 0,
        }}>
        <Text
          style={{
            color: border ? 'black' : 'white',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {lable}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RoundButtonComp;

const styles = StyleSheet.create({});
