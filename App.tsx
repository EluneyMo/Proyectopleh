import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from './assets/src/login/login';
import Firebase from './firebase/firebase';

export default function App() {
  const [user, setUser] =useState<firebase.User | null>(null);
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
