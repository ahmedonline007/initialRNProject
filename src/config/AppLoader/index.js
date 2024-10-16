import {StyleSheet, Text, View, Modal} from 'react-native';
import React from 'react';
import {Chase} from 'react-native-animated-spinkit';
const AppLoaderSpinner = ({visible}) => {
  return (
    <Modal transparent={true} visible={visible}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.75)',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Chase size={48} color={'white'} />
        <Text style={{color: 'white', marginTop: 10}}>Loading ...</Text>
      </View>
    </Modal>
  );
};

export default AppLoaderSpinner;

const styles = StyleSheet.create({});
