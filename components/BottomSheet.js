import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

const BottomSheet = ({bottomSheetRef, children}) => {
  return (
    <RBSheet
      ref={bottomSheetRef}
      height={300}
      openDuration={250}
      closeOnDragDown={true}
      closeOnPressMask={false}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0,0,0,0,2)',
        },
        draggableIcon: {
          backgroundColor: 'gray',
          width: 80,
        },
        container:{
            borderTopLeftRadius:30,
            borderTopRightRadius:30
        }
      }}>
      <View>{children}</View>
    </RBSheet>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({});
