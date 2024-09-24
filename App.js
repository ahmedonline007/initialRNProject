import {StyleSheet, Text, View, Button, Image} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const App = () => {
  const [imageUri, setImageUri] = useState(null);

  // فتح الكاميرا
  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      cameraType: 'back',
      saveToPhotos: true,
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else {
        console.log('ImagePicker Error: ', response.assets[0].uri);
        setImageUri(response.assets[0].uri);
      }
    });
  };

  // فتح مكتبة الصور
  const openImageLibrary = () => {
    const options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else {
        console.log('ImagePicker Error: ', response.assets[0].uri);
        setImageUri(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {imageUri ? (
        <Image
          source={{uri: imageUri}}
          style={{width: 300, height: 300, marginBottom: 20}}
        />
      ) : (
        <Text>No image selected</Text>
      )}
      <Button title="Open Camera" onPress={openCamera} />
      <Button title="Open Image Library" onPress={openImageLibrary} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
