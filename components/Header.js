import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({title, onPress}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.toggleDrawer()}>
          <MaterialCommunityIcons
            name={'menu-open'}
            size={24}
            color={'#0d6efd'}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={{marginLeft: 12, fontSize: 17, fontWeight: 'bold'}}>
          {title}
        </Text>
      </View>
      <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
        <MaterialCommunityIcons
          name={'more'}
          size={24}
          color={'#0d6efd'}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 16,
  },
  iconContainer: {
    height: 45,
    width: 45,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  icon: {
    height: 24,
    width: 24,
    tintColor: 'black',
  },
});
