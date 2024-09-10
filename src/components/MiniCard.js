import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';

const MiniCard = props => {
  return (
    <View style={{flexDirection: 'row', margin: 10, marginBottom: 0}}>
      <Image
        style={{width: '45%', height: 100}}
        source={{
          uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
        }}
      />
      <View style={{paddingLeft: 10}}>
        <Text
          style={{
            fontSize: 15,
            width: Dimensions.get('screen').width / 2,
          }}
          ellipsizeMode="tail"
          numberOfLines={2}>
          {props.title}
        </Text>
        <Text style={{fontSize: 12}}>{props.channel}</Text>
      </View>
    </View>
  );
};

export default MiniCard;

const styles = StyleSheet.create({});
