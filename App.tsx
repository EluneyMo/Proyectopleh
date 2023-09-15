import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';// Importa las funciones y la instancia de Firebase
import Login from './assets/src/login/login';
import appFirebase from './firebase/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const auth=getAuth(appFirebase)
export default function App() {
  const [user, setUser] = useState(null);
  const [dataFromDatabase, setDataFromDatabase] = useState(null);

  // Función para iniciar sesión
  const handleLogin = async () => {
    try {
      const user = await signInUserWithEmailAndPassword('correo@example.com', 'contraseña');
      setUser(user);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  useEffect(() => {
    // Escuchar cambios en la base de datos cuando el usuario esté autenticado
    if (user) {
      listenToDatabaseChanges('usuarios/', (data) => {
        setDataFromDatabase(data);
      });
    }
  }, [user]);


  return (
    <View style={styles.container}>
      <Text>PLEH</Text>
      <View style={styles.iniciar}>
        {/* Asumiendo que Login es un componente válido */}
        <Login/>
      </View>
    </View>
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
