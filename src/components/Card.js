import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const Card = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('VideoPlayer', {VideoId: 'wIyHSOugGGw'})
      }>
      <View style={{marginTop: 10}}>
        <Image
          style={{width: '100%', height: 200}}
          source={{
            uri: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg',
          }}
        />
        <View style={{flexDirection: 'row', margin: 7}}>
          <MaterialCommunityIcons
            name="account-circle"
            size={40}
            color="#212121"
            style={{marginTop: 5}}
          />
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                width: Dimensions.get('screen').width - 50,
              }}
              ellipsizeMode="tail"
              numberOfLines={2}>
              This is Amazing This is Amazing This is Amazing This is Amazing
            </Text>
            <Text>This is Amazing</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({});
