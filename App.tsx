import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import Login from './assets/src/login/login';
import Firebase from './firebase/firebase';
interface AuthenticatedUser{
  uid:string;
  email:string|null;
}
export default function App() {
  const [user, setUser] =useState<Firebase.User | null>(null);
  useEffect(()=>  {
    const unsubscribe =Firebase.auth().onAuthStateChanged((authenticatedUser: AuthenticatedUser | null)=>{
      setUser(authenticatedUser);
    })
  });
  return (
    <React.Fragment>
        <Login />
    </React.Fragment>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
