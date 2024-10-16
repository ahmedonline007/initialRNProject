import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const FormInputText = ({
  placeholder,
  extraStyle,
  onChangeText,
  keyboardType,
}) => {
  return (
    <View
      style={[
        {borderBottomColor: '#D5D8DC', borderBottomWidth: 2},
        extraStyle,
      ]}>
      <TextInput
        placeholder={placeholder}
        onChangeText={text => onChangeText(text)}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default FormInputText;

const styles = StyleSheet.create({});
