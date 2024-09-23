import React, {useRef} from 'react';
import {View, Text, ScrollView, Animated, Dimensions} from 'react-native';
import {styled} from 'nativewind';
// import {Formik} from 'formik';
// import * as Yup from 'yup';

// // إعداد التحقق على الحقول باستخدام Yup
// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .required('الاسم مطلوب')
//     .min(3, 'يجب أن يكون الاسم على الأقل 3 حروف'),
//   email: Yup.string()
//     .email('البريد الإلكتروني غير صحيح')
//     .required('البريد الإلكتروني مطلوب'),
//   password: Yup.string()
//     .required('كلمة المرور مطلوبة')
//     .min(6, 'يجب أن تكون كلمة المرور على الأقل 6 حروف'),
// });
const {width} = Dimensions.get('window');

const data = [
  {id: 1, title: 'Slide 1', backgroundColor: '#ff6347'}, // Tomato
  {id: 2, title: 'Slide 2', backgroundColor: '#4682b4'}, // Steel Blue
  {id: 3, title: 'Slide 3', backgroundColor: '#32cd32'}, // Lime Green
  {id: 4, title: 'Slide 4', backgroundColor: '#ff4500'}, // Orange Red
  {id: 5, title: 'Slide 5', backgroundColor: '#ff4500'}, // Orange Red
];


const App = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View className="flex-1">
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
        className="flex-1">
        {data.map((item, index) => (
          <View
            key={index}
            style={{width}}
            className={`items-center justify-center h-full`}>
            <View
              className="w-4/5 h-4/5 rounded-lg"
              style={{backgroundColor: item.backgroundColor}}>
              <Text className="text-3xl text-white font-bold text-center mt-auto mb-auto">
                {item.title}
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>

      <View className="flex-row justify-center mt-4">
        {data.map((_, index) => {
          const dotWidth = scrollX.interpolate({
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: [8, 16, 8],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              className="h-2 rounded-full bg-blue-500 mx-1"
              style={{width: dotWidth}}
            />
          );
        })}
      </View>
    </View>
  );
  // return (
  //   // <Formik
  //   //   initialValues={{name: '', email: '', password: ''}}
  //   //   validationSchema={validationSchema}
  //   //   onSubmit={values => {
  //   //     // تنفيذ الأكشن عند إرسال النموذج
  //   //     console.log(values);
  //   //   }}>
  //   //   {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
  //   //     <View style={styles.container}>
  //   //       {/* حقل الاسم */}
  //   //       <TextInput
  //   //         style={styles.input}
  //   //         placeholder="الاسم"
  //   //         onChangeText={handleChange('name')}
  //   //         onBlur={handleBlur('name')}
  //   //         value={values.name}
  //   //       />
  //   //       {touched.name && errors.name && (
  //   //         <Text style={styles.errorText}>{errors.name}</Text>
  //   //       )}

  //   //       {/* حقل البريد الإلكتروني */}
  //   //       <TextInput
  //   //         style={styles.input}
  //   //         placeholder="البريد الإلكتروني"
  //   //         onChangeText={handleChange('email')}
  //   //         onBlur={handleBlur('email')}
  //   //         value={values.email}
  //   //         keyboardType="email-address"
  //   //       />
  //   //       {touched.email && errors.email && (
  //   //         <Text style={styles.errorText}>{errors.email}</Text>
  //   //       )}

  //   //       {/* حقل كلمة المرور */}
  //   //       <TextInput
  //   //         style={styles.input}
  //   //         placeholder="كلمة المرور"
  //   //         onChangeText={handleChange('password')}
  //   //         onBlur={handleBlur('password')}
  //   //         value={values.password}
  //   //         secureTextEntry
  //   //       />
  //   //       {touched.password && errors.password && (
  //   //         <Text style={styles.errorText}>{errors.password}</Text>
  //   //       )}

  //   //       {/* زر الإرسال */}
  //   //       <Button onPress={handleSubmit} title="إرسال" />
  //   //     </View>
  //   //   )}
  //   // </Formik>
  // );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     marginTop: 50,
//   },
//   input: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 10,
//   },
// });
