import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from './assets/src/login/login';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAmobyJ0-r1o4H0zGMDeL6GtuS4gmxsir4",
  authDomain: "pleh-20a48.firebaseapp.com",
  projectId: "pleh-20a48",
  storageBucket: "pleh-20a48.appspot.com",
  messagingSenderId: "215017658521",
  appId: "1:215017658521:web:b456ff32cfd8381a0cc008",
  measurementId: "G-GMVJSBPJG8"
}
export default function App() {
  return (
    <React.Fragment>
        <Login />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
