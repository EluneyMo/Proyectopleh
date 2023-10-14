import {initializeApp } from "firebase/app"
const firebaseConfig={
  apiKey: "AIzaSyAmobyJ0-r1o4H0zGMDeL6GtuS4gmxsir4",
  authDomain: "pleh-20a48.firebaseapp.com",
  databaseURL: "https://pleh-20a48-default-rtdb.firebaseio.com",
  projectId: "pleh-20a48",
  storageBucket: "pleh-20a48.appspot.com",
  messagingSenderId: "215017658521",
  appId: "1:215017658521:web:d12408ce202b77ea0cc008",
  measurementId: "G-JFK9KVPG24"
};
const appFirebase=initializeApp(firebaseConfig);
export default appFirebase;
