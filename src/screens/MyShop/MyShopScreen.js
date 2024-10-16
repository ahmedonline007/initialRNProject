import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import AppToolBar from '../../components/AppToolBar';
import {
  _getFromAsyncStorage,
  _storeIntoAsyncStorage,
} from '../../config/asyncStorage';
import FormInputText from '../../components/FormInputText';
import DropDown from '../../components/DropDown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SelectionComp from '../../components/SelectionComp';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import LocationPickerModal from '../../modals/LocationPickerModal';
import DatePicker from 'react-native-date-picker';
import {formatTime} from '../../config/datePicker';
import RoundButtonComp from '../../components/RoundButtonComp';
import {toastMessage} from '../../config/AppTost';
import {axiosClient, CREATE_SHOP} from '../../config/api';
import AppLoaderSpinner from '../../config/AppLoader/index';

const MyShopScreen = ({navigation}) => {
  const [user, setUser] = useState();
  const [openDatePicker, setopenDatePicker] = useState();
  const [currentTimeOpetion, setcurrentTimeOpetion] = useState();
  const [showMap, setShowMap] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [imageOwnerUri, setImageOwnerUri] = useState(null);
  const [shopCategory, setShopCategory] = useState(null);
  const [shopOpenTime, setshopOpenTime] = useState();
  const [shopCloseTime, setshopCloseTime] = useState();
  const [shopLocation, setShopLocation] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([
    {id: 1, name: 'Category1'},
    {id: 2, name: 'Category2'},
    {id: 3, name: 'Category3'},
    {id: 4, name: 'Category4'},
    {id: 5, name: 'Category5'},
    {id: 6, name: 'Category6'},
  ]);
  const refRBSheet = useRef();
  useEffect(() => {
    getUserData();
  }, []);

  async function createMyShop() {
    if (!name) {
      toastMessage('error', 'Please Fill Name');
      return;
    }
    if (!email) {
      toastMessage('error', 'Please Fill Email');
      return;
    }
    if (!phone) {
      toastMessage('error', 'Please Fill Phone');
      return;
    }
    // if (!imageUri) {
    //   toastMessage('error', 'Please Fill image');
    //   return;
    // }
    // if (!imageOwnerUri) {
    //   toastMessage('error', 'Please Fill imageOwner');
    //   return;
    // }
    if (!shopLocation) {
      toastMessage('error', 'Please Fill shopLocation');
      return;
    }
    if (!shopOpenTime) {
      toastMessage('error', 'Please Fill shopOpenTime');
      return;
    }
    if (!shopCloseTime) {
      toastMessage('error', 'Please Fill shopCloseTime');
      return;
    }

    setLoading(true);
    console.log('Start');
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('lat', shopLocation.marker.latitude);
    formData.append('long', shopLocation.marker.longitude);
    formData.append('address', shopLocation.address);
    formData.append('category', shopCategory);
    formData.append('timeOpen', shopOpenTime);
    formData.append('timeClose', shopCloseTime);
    formData.append('shomImage', {
      uri: imageUri.assets[0].uri,
      type: imageUri.assets[0].type,
      name: imageUri.assets[0].fileName,
    });
    formData.append('shomImageOwner', {
      uri: imageOwnerUri.assets[0].uri,
      type: imageOwnerUri.assets[0].type,
      name: imageOwnerUri.assets[0].fileName,
    });

    // const {data, status} = await axiosClient.post(CREATE_SHOP, formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });
    const status = 200;

    setLoading(false);
    if (status == 200) {
      const obj = {};
      formData.forEach((value, key) => {
        // Handle multiple values with the same key (e.g. for checkbox inputs)
        if (obj[key]) {
          if (Array.isArray(obj[key])) {
            obj[key].push(value);
          } else {
            obj[key] = [obj[key], value];
          }
        } else {
          obj[key] = value;
        }
      });
      //   if (data.status === '200') {
      toastMessage('Success', 'Success');

      _storeIntoAsyncStorage('user', JSON.stringify(obj));
      //   }
      //    else {
      //     toastMessage('error', data.message);
      //   }
    } else {
      toastMessage('error', 'Error');
    }
  }

  async function getUserData() {
    const userData = await _getFromAsyncStorage('user');
    if (userData) {
      let userJson = JSON.parse(userData);
      console.log('userJson : ', userJson);
      setUser(userJson);
    }
  }

  async function pickImageFromGallery() {
    // const options = {
    //   mediaType: 'photo',
    // };
    // launchImageLibrary(options, response => {
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.errorCode) {
    //     console.log('ImagePicker Error: ', response.errorCode);
    //   } else {
    //     console.log('ImagePicker Error: ', response.assets[0].uri);
    //     setImageUri(response.assets[0].uri);
    //   }
    // });
    const results = await launchImageLibrary();
    if (!results.didCancel) {
      return;
    }
    setImageUri(results);
  }
  async function pickImageOwnerFromGallery() {
    // const options = {
    //   mediaType: 'photo',
    // };
    // launchImageLibrary(options, response => {
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.errorCode) {
    //     console.log('ImagePicker Error: ', response.errorCode);
    //   } else {
    //     console.log('ImagePicker Error: ', response.assets[0].uri);
    //     setImageOwnerUri(response.assets[0].uri);
    //   }
    // });
    const results = await launchImageLibrary();
    if (!results.didCancel) {
      return;
    }
    setImageOwnerUri(results);
  }

  const SelectCategoryBS = () => {
    return (
      //   <RBSheet
      //     ref={refRBSheet}
      //     draggable={true}
      //     closeOnPressMask={true}
      //     useNativeDriver={true}
      //     height={Dimensions.get('window').height / 2}
      //     customStyles={{
      //       wrapper: {
      //         backgroundColor: 'transparent',
      //       },
      //       draggableIcon: {
      //         backgroundColor: '#000',
      //       },
      //     }}
      //     customModalProps={{
      //       animationType: 'slide',
      //       statusBarTranslucent: true,
      //     }}
      //     customAvoidingViewProps={{
      //       enabled: false,
      //     }}>
      //     <View style={{padding: 15}}>
      //       <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
      //         Select Shop Category
      //       </Text>
      //       <View>
      //         {SelectCategoryBS.map(item => {
      //           return (
      //             <TouchableOpacity
      //               key={item.id}
      //               onPress={() => {
      //                 setShopCategory(item.name);
      //                 refRBSheet.current.close();
      //               }}>
      //               <View style={{marginTop: 10}}>
      //                 <View
      //                   style={{
      //                     padding: 5,
      //                     borderBottomColor: '#D5D8DC',
      //                     borderBottomWidth: 2,
      //                   }}>
      //                   <Text>{item.name}</Text>
      //                 </View>
      //               </View>
      //             </TouchableOpacity>
      //           );
      //         })}
      //       </View>
      //     </View>
      //   </RBSheet>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: '#fff',
          },
          draggableIcon: {
            backgroundColor: '#ff6347',
          },
        }}>
        <View style={{padding: 15}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            Select Shop Category
          </Text>
          <View>
            {category.map(item => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    setShopCategory(item.name);
                    refRBSheet.current.close();
                  }}>
                  <View style={{marginTop: 10}}>
                    <View
                      style={{
                        padding: 5,
                        borderBottomColor: '#D5D8DC',
                        borderBottomWidth: 2,
                      }}>
                      <Text>{item.name}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </RBSheet>
    );
  };

  return (
    <View style={{flex: 1}}>
      <AppLoaderSpinner visible={loading} />
      <AppToolBar label={'My Shop'} navigation={navigation} />
      <SelectCategoryBS />
      <LocationPickerModal
        visible={showMap}
        onClose={() => setShowMap(false)}
        onLocationSelected={data => {
          setShopLocation(data);
          setShowMap(false);
        }}
      />
      <DatePicker
        modal
        mode="time"
        open={openDatePicker}
        date={new Date()}
        onConfirm={date => {
          console.log('date', date);
          setopenDatePicker(false);
          if (currentTimeOpetion === 'open') {
            setshopOpenTime(
              formatTime(date.getHours() + ':' + date.getMinutes()),
            );
          }
          if (currentTimeOpetion === 'close') {
            setshopCloseTime(
              formatTime(date.getHours() + ':' + date.getMinutes()),
            );
          }
        }}
        onCancel={() => {
          setopenDatePicker(false);
        }}
      />
      {user == null ? (
        <>
          <View style={{flex: 1, padding: 15}}>
            <FormInputText
              placeholder={'Name'}
              onChangeText={text => setName(text)}
            />
            <FormInputText
              placeholder={'Email'}
              extraStyle={{marginTop: 10}}
              onChangeText={text => setEmail(text)}
            />
            <FormInputText
              placeholder={'Phone'}
              extraStyle={{marginTop: 10}}
              onChangeText={text => setPhone(text)}
              keyboardType={'number-pad'}
            />
            <SelectionComp
              label={'Upload Shop Image'}
              image={<MaterialIcons name="ios-share" size={25} />}
              extraStyle={{marginTop: 10}}
              checked={imageUri ? true : false}
              onPress={() => pickImageFromGallery()}
            />
            <SelectionComp
              label={'Upload Shop Owner Image'}
              image={<MaterialIcons name="ios-share" size={25} />}
              extraStyle={{marginTop: 10}}
              checked={imageOwnerUri ? true : false}
              onPress={() => pickImageOwnerFromGallery()}
            />
            <SelectionComp
              label={
                shopCategory === undefined
                  ? 'Select Category'
                  : `Select Category - ${shopCategory}`
              }
              image={<EvilIcons name="chevron-down" size={30} />}
              extraStyle={{marginTop: 10}}
              checked={shopCategory ? true : false}
              onPress={() => refRBSheet.current.open()}
            />
            <SelectionComp
              label={'Select Shop Location'}
              image={<MaterialIcons name="my-location" size={30} />}
              extraStyle={{marginTop: 10}}
              onPress={() => setShowMap(true)}
              checked={shopLocation ? true : false}
            />
            <SelectionComp
              label={
                shopOpenTime === undefined
                  ? 'Open Time'
                  : 'Open Time -' + shopOpenTime
              }
              checked={shopOpenTime ? true : false}
              image={<Ionicons name="time" size={30} />}
              extraStyle={{marginTop: 10}}
              onPress={() => {
                setcurrentTimeOpetion('open');
                setopenDatePicker(true);
              }}
            />
            <SelectionComp
              label={
                shopCloseTime === undefined
                  ? 'Close Time'
                  : 'Close Time - ' + shopCloseTime
              }
              checked={shopCloseTime ? true : false}
              image={<Ionicons name="time" size={30} />}
              extraStyle={{marginTop: 10}}
              onPress={() => {
                setcurrentTimeOpetion('close');
                setopenDatePicker(true);
              }}
            />
            <RoundButtonComp
              lable={'Submit'}
              marginTop={20}
              onPress={() => createMyShop()}
            />
          </View>
        </>
      ) : (
        <>
          <View style={{flex: 1}}>
            <ImageBackground
              source={{uri: user.data.user.photo}}
              resizeMode={'cover'}
              style={{
                flex: 0.3,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}>
              <View
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  backgroundColor: 'yellow',
                  position: 'absolute',
                  bottom: -50,
                }}></View>
            </ImageBackground>
            <View style={{flex: 0.7}}>
              <View style={{marginTop: 55, alignItems: 'center'}}>
                <Text
                  style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                  {user.data.user.name}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#F2F4F4',
                  elevation: 3,
                  padding: 10,
                  marginTop: 20,
                  marginHorizontal: 10,
                }}>
                <View
                  style={{
                    flex: 0.5,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    Total Orders
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      marginTop: 10,
                    }}>
                    100
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.5,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    Reviews
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      marginTop: 10,
                    }}>
                    4.5
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default MyShopScreen;

const styles = StyleSheet.create({});
