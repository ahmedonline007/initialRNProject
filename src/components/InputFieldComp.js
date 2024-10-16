import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const InputFieldComp = ({
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  onChangeText,
}) => {
  return (
    <View
      style={{
        // borderBottomColor: '#EAECEE',
        backgroundColor: 'white',
        borderWidth: 2,
        marginBottom: 15,
        borderRadius: 30,
        paddingHorizontal: 15,
      }}>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onChangeText={text => onChangeText(text)}
      />
    </View>
  );
};

export default InputFieldComp;

const styles = StyleSheet.create({});
