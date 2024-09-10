import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const VideoPlayer = props => {
  return (
    <View style={{flex: 1}}>
      <View style={{width: '100%', height: 200}}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{uri: `https://www.youtube.com/embed/${props.videoId}`}}
        />
        <Text
          style={{
            fontSize: 20,
            width: Dimensions.get('screen').width - 50,
            margin: 9,
          }}
          ellipsizeMode="tail"
          numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({});
