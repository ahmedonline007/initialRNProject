import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SelectionComp = ({
  extraStyle,
  image,
  label,
  onPress,
  checked = false,
}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View
        style={[
          {
            borderColor: '#D5D8DC',
            borderWidth: 1,
            paddingHorizontal: 15,
            paddingVertical: 8,
            borderRadius: 5,
            flexDirection: 'row',
            height: 45,
            alignItems: 'center',
            justifyContent: 'space-between',
          },
          extraStyle,
        ]}>
        <View>
          <Text>{label}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {image}
          {checked ? (
            <Ionicons
              style={{
                marginRight: 10,
              }}
              name="checkbox-outline"
              color={'#2ECC71'}
              size={20}
            />
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SelectionComp;

const styles = StyleSheet.create({});
