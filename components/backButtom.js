import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {colors} from '../thems';

const BackButtom = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="bg-white rounded-full h-8 w-8">
      <ChevronLeftIcon size="30" color={colors.button} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default BackButtom;
