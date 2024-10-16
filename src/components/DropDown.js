import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const DropDown = ({extraStyle}) => {
  return (
    <TouchableOpacity onPress={() => console.log('Selected')}>
      <View
        style={[
          {
            borderBottomColor: '#D5D8DC',
            borderBottomWidth: 2,
            paddingHorizontal: 15,
            paddingVertical: 7,
            borderRadius: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          extraStyle,
        ]}>
        <Text>Select Category</Text>
        <EvilIcons name="chevron-down" size={30} />
      </View>
    </TouchableOpacity>
  );
};

export default DropDown;

const styles = StyleSheet.create({});
