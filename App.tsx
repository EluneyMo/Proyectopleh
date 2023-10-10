import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from './assets/src/login/login';
import Home from './assets/src/home/Home';
import appFirebase from './firebase/firebase';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
<<<<<<< HEAD
import AppNavigator from './Appnavigator';

const auth = getAuth(appFirebase);

const App: React.FC = () => {
  const [usuario, setUsuario] = useState<User | null | undefined>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });

    // Cleanup
    return () => {
      unsubscribe();
    };
  }, []); // el array vacío asegura que useEffect solo se ejecute después del montaje inicial
=======
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cartita from './assets/src/cuestionario/cajapreguntas';
>>>>>>> 90c8ad60eeb74ccba4cb71618ca9278145aedd01

  return (
    <>
<<<<<<< HEAD
      <AppNavigator />
=======
    <Router>
      <Routes>
        <Route path='/' element={<Home correoUsuario={usuario?.email}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/boton-panico' element={<Panicbutton/>}/>
        <Route path="/preguntas" element={<Cartita/>}/>
      </Routes>
    </Router>
    <div>
     
      {usuario ? <Home correoUsuario={usuario.email}/>: <Login/>}
      
    </div>
   
>>>>>>> 90c8ad60eeb74ccba4cb71618ca9278145aedd01
    </>
  );
};

export default App;

