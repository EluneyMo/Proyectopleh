import { firebase } from '@react-native-firebase/auth';
import initializeApp from '../node_modules/firebase/app';
import  getAuth  from '../node_modules/firebase/auth';
import '../node_modules/firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyAmobyJ0-r1o4H0zGMDeL6GtuS4gmxsir4",
    authDomain: "pleh-20a48.firebaseapp.com",
    projectId: "pleh-20a48",
    storageBucket: "pleh-20a48.appspot.com",
    messagingSenderId: "215017658521",
    appId: "1:215017658521:web:b456ff32cfd8381a0cc008",
    measurementId: "G-GMVJSBPJG8"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export default firebase;