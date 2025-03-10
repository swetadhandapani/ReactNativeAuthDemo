// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence , getAuth} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjCYWq24_RpClwcfL5cvQGxIqz5sKo6j4",
  authDomain: "react-native-auth-demo-633ab.firebaseapp.com",
  projectId: "react-native-auth-demo-633ab",
  storageBucket: "react-native-auth-demo-633ab.firebasestorage.app",
  messagingSenderId: "816507698628",
  appId: "1:816507698628:web:536f8d97d0c69621f43891",
};
let auth;
if (getApps().length == 0) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
}else{
    auth = getAuth();
}

export default auth;
