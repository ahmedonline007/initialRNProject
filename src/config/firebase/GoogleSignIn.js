import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const _signInWithGoogle = async () => {
  try {
    GoogleSignin.configure({
      offlineAccess: false,
      webClientId:
        '1023874064561-vmpqpoiqitfes7k8c4tmsekoahfb5538.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });

    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    const {idToken} = await GoogleSignin.signIn();
    const googleCre = auth.GoogleAuthProvider.credential(idToken);
    auth().signInWithCredential(googleCre);
    return userInfo;
  } catch (error) {
    return null;
  }
};
