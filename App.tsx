import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';// Importa las funciones y la instancia de Firebase
import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import Login from './assets/src/login/login';
import Home from './assets/src/home/Home';
import Panicbutton from './assets/src/panico/Panicbutton';
import { ReactDOM } from 'react';
import appFirebase from './firebase/firebase';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

const auth=getAuth(appFirebase)
export default function App() {
  const [usuario, setUsuario] = useState<User | undefined>();
  onAuthStateChanged(auth,(usuarioFirebase)=>{
    if (usuarioFirebase){
      setUsuario(usuarioFirebase)
    }else
    {
      setUsuario(undefined)
    }
  });
  
  return (
    <>
    <Router>
      <Routes>
{/*       
      <Route path='/' element={<Login/>}/> */}
        <Route path='/home' element={<Home correoUsuario={usuario?.email}/>}/>
        <Route path='/boton-panico' element={<Panicbutton/>}/>
      </Routes>
    </Router>
    <div>
     
      {usuario ? <Home correoUsuario={usuario.email}/>: <Login/>}
      
    </div>
   
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iniciar: {
    // Estilos para la vista de inicio
  },
});
