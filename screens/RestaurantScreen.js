import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import DishRow from '../components/DishRow';
import CardIcon from '../components/CardIcon';
import {useDispatch} from 'react-redux';
import {setRestaurant} from '../slices/restaurantSlice';
const RestaurantScreen = () => {
  const {params} = useRoute();
  const navigation = useNavigation();
  let item = params;
  const dispatch = useDispatch();
  useEffect(() => {
    if (item && item.id) {
      dispatch(setRestaurant({...item}));
    }
  });
  return (
    <View>
      <CardIcon />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-5 left-4 bg-gray-50 p-2 rounded-full shadow">
            <Feather name={'arrow-left'} size={24} />
          </TouchableOpacity>
        </View>
        <View
          style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
          className="bg-white -mt-12 pt-6">
          <View className="px-5">
            <Text className="text-3xl font-bold"> {item.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Text className="text-xs">
                  <Text className="text-green-700">{item.stars}</Text>
                  <Text className="text-gray-700">
                    {item.reviews} review .
                    <Text className="font-semibold"> {item.category}</Text>
                  </Text>
                </Text>
              </View>
            </View>
            <View className="flex-row items-center space-x-1">
              <Feather name={'map-pin'} size={24} color={'gray'} />
              <Text className="text-gray-700 text-x5">
                NearBy {item.address}
              </Text>
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {item.dishes.map((data, index) => {
            return <DishRow item={{...data}} key={index} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
