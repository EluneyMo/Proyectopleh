import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from './assets/src/login/login';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default function App() {
  return (
    <React.Fragment>
        <Login />
    </React.Fragment>
  );
}

const app = initializeApp(firebaseConfig);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
