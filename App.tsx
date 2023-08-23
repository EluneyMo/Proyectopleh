import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import Login from './assets/src/login/login';
import {app, auth, database} from './firebase/firebase';
import { DataSnapshot } from 'firebase/database';
interface AuthenticatedUser{
  uid:string;
  email:string|null;
}
export default function App() {
  const [user, setUser] =useState<AuthenticatedUser | null>(null);
  useEffect(()=>  {
    const unsubscribe =auth.onAuthStateChanged((authenticatedUser: AuthenticatedUser | null)=>{
      setUser(authenticatedUser);
    });
    return ()=>unsubscribe();
  },[]);
  const handleLogout =async()=>{
    try{
      await auth.signOut();
    }catch (error){
      console.error("Error al cerrar sesion:", error)
    }
  };
    useEffect(()=>{
      if (user){
      const databaseRef=database.ref("https://pleh-20a48-default-rtdb.firebaseio.com/")
      databaseRef.on('value', (snapshot:DataSnapshot)=>{
        const datafromDatabase =snapshot.val();
        console.log('datos desde la base de datos:', datafromDatabase)
    });
  }
}, [user]);
  return (
    <React.Fragment>
      <div className="App">
        <Text>PLEH</Text>
      </div>
      <div className='iniciar'>
        <Login />
      </div>
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
