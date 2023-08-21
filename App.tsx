import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from './assets/src/login/login';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAmobyJ0-r1o4H0zGMDeL6GtuS4gmxsir4",
  authDomain: "pleh-20a48.firebaseapp.com"
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
