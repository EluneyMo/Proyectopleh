import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from './assets/src/login/login';
import Home from './assets/src/home/Home';
import appFirebase from './firebase/firebase';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

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
  }, []); // el array vacío= useEffect ejecutandose después del montaje inicial
  return (
    <>
      <AppNavigator />
</>
  );
}
export default App;

