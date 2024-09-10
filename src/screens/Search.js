import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MiniCard from '../components/MiniCard';
const Search = ({navigation}) => {
  const [value, setvalue] = useState('');
  const [loading, setLoading] = useState(false);
  const [miniCardData, setminiCardData] = useState([]);
  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyDOfc7a4-aR4Nzd0P2JaDwCXEVyS57dtMI`,
    )
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setminiCardData(data.items);
      });
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          padding: 5,
          flexDirection: 'row',
          justifyContent: 'space-around',
          elevation: 5,
          backgroundColor: 'white',
        }}>
        <Ionicons
          name="arrow-back"
          size={32}
          color="#212121"
          onPress={() => navigation.goBack()}
        />
        <TextInput
          value={value}
          onChangeText={text => setvalue(text)}
          style={{width: '70%', backgroundColor: '#e6e6e6'}}
        />
        <Ionicons
          name="send-sharp"
          size={32}
          color="#212121"
          onPress={() => fetchData()}
        />
      </View>

      {/*      <ScrollView>
        <MiniCard />
        <MiniCard /> 
      </ScrollView>
*/}
      {loading ? (
        <ActivityIndicator style={{marginTop: 10}} size="large" color="red" />
      ) : (
        <FlatList
          data={miniCardData}
          renderItem={({item}) => {
            return (
              <MiniCard
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
              />
            );
          }}
          keyExtractor={item => item.id.videoId}
        />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
