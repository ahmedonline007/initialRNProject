import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Geocoder from 'react-native-geocoding';

const LocationPickerModal = ({visible, onClose, onLocationSelected}) => {
  const mapRef = useRef();
  const [marker, setMarker] = useState();
  const [address, setAddress] = useState();
  Geocoder.init('AIzaSyA7zcXuYBQkt9PkrcTLM-wYBUALCDGTs6c');

  useEffect(() => {
    if (marker !== undefined) {
      Geocoder.from(marker.latitude, marker.longitude).then(data => {
        let fetchedAddress = data.results[0].formatted_address;
        setAddress(data);
      });
    }
  }, [marker]);

  return (
    <Modal visible={visible}>
      <View style={{flex: 2, backgroundColor: 'white'}}>
        <MapView
          apiKey="AIzaSyA7zcXuYBQkt9PkrcTLM-wYBUALCDGTs6c"
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={e => {
            setMarker(e.nativeEvent.coordinate);
            console.log(e);
          }}
          ref={mapRef}
          zoomControlEnabled={true}
          showsMyLocationButton={true}
          provider={PROVIDER_GOOGLE}
          style={styles.map}>
          {marker !== undefined ? <Marker coordinate={marker} /> : null}
        </MapView>
        <View
          style={{
            padding: 15,
            backgroundColor: 'white',
            marginVertical: 10,
            marginHorizontal: 10,
            borderRadius: 20,
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>
                Pick Shop Location
              </Text>
              <TouchableOpacity onPress={onClose}>
                <Ionicons name="close-circle" size={30} />
              </TouchableOpacity>
            </View>
            <Text style={{marginTop: 10, paddingRight: 15}}>{address}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => onLocationSelected({marker, address})}
          style={{
            position: 'absolute',
            bottom: 5,
            left: Dimensions.get('window').width / 2 - 70,
          }}>
          <View
            style={{
              bottom: 5,
              backgroundColor: 'blue',
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 5,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Confirm Location
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default LocationPickerModal;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
