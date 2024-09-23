import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {themeColors} from '../theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Categories from '../components/Categories';
import {Featured} from '../constant';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/*search bar*/}
      <View className="flex-row items-center space-x-2 px-4 pb-s">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-350">
          <Icon name={'search'} size={24} color={'gray'} />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-1-2 pl-2 border-l-gray-300">
            <Feather name={'map-pin'} size={24} color={'gray'} />
            <Text className="text-gray-600">Cairo</Text>
          </View>
        </View>
        <View
          style={{backgroundColor: themeColors.bgColor(1)}}
          className="p-3   rounded-full">
          <Feather name={'sliders'} size={25} />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}>
        <View>
          <Categories />
          {/*featured*/}
          <View className="mt-5">
            {[Featured, Featured, Featured].map((item, index) => {
              return (
                <FeaturedRow
                  key={index}
                  title={item.title}
                  description={item.description}
                  restaurants={item.restaurants}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
