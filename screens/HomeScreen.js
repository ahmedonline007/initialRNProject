import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import {colors} from '../thems';
import randomImage from '../assests/randomImage';
import EmptyList from '../components/emptyList';
import {useNavigation} from '@react-navigation/native';

const items = [
  {
    id: 1,
    place: 'Gujrat',
    country: 'Pakistan',
  },
  {
    id: 2,
    place: 'London Eye',
    country: 'England',
  },
  {
    id: 3,
    place: 'Washington dc',
    country: 'America',
  },
  {
    id: 4,
    place: 'New Yourk',
    country: 'America',
  },
  {
    id: 5,
    place: 'Washington dc',
    country: 'America',
  },
  {
    id: 6,
    place: 'New Yourk',
    country: 'America',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>
        <TouchableOpacity className="p-2 px-3 bg-white border border-gray-200 rounded-full">
          <Text className={colors.heading}> LogOut</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          source={require('../assests/images/banner.png')}
          className="w-60 h-60"
        />
      </View>
      <View className="px-4 space-y-4">
        <View className="flex-row justify-between items-center">
          <Text className={`${colors.heading} font-bold text-xl`}>
            Recent Trips
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddTrip')}
            className="p-2 px-3 bg-white border border-gray-200 rounded-full">
            <Text className={colors.heading}>Add Trips</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            scrollEnabled={true}
            numColumns={2}
            ListEmptyComponent={
              <EmptyList message={"You Haven't recorded any trips yet"} />
            }
            keyExtractor={item => item.id}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            contentContainerStyle={{paddingBottom: 0}}
            showsVerticalScrollIndicator={false}
            data={items}
            renderItem={({item}) => {
              return (
                <TouchableOpacity className="bg-white p-2 rounded-2xl mb-3 shadow-sm">
                  <View>
                    <Image source={randomImage()} className="w-36 h-36 mb-2" />
                    <Text className={`${colors.heading} font-bold`}>
                      {item.place}
                    </Text>
                    <Text className={`${colors.heading} text-xs`}>
                      {item.country}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
