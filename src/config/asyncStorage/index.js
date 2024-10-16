import AsyncStorage from '@react-native-async-storage/async-storage';

export const _storeIntoAsyncStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log('Error', e.Message);
  }
};
export const _getFromAsyncStorage = async key => {
  try {
    console.log('KEYKEYKEY', key);
    const val = await AsyncStorage.getItem(key);
    console.log('KEYKEYKEYval', val);
    if (val) {
      return val;
    } else {
      return null;
    }
  } catch (e) {
    console.log('Error', e.Message);
    return null;
  }
};
