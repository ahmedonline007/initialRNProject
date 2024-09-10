import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

const LittleCard = ({name}) => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        height: 50,
        width: 170,
        borderRadius: 5,
        marginTop: 10,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontSize: 22,
          marginTop: 5,
        }}>
        {name}
      </Text>
    </View>
  );
};

const Explore = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          <LittleCard name="Youssef" />
          <LittleCard name="Ahmed" />
          <LittleCard name="Salah" />
          <LittleCard name="Youssef" />
          <LittleCard name="Ahmed" />
          <LittleCard name="Salah" />
        </View>
        <Text style={{margin: 8, fontSize: 22, borderBottomWidth: 1}}>
          Trending Video
        </Text>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
