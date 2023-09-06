import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getAuth, onAuthStateChanged, User, signOut} from 'firebase/auth'; // Importa auth de Firebase
import { getDatabase,ref, DataSnapshot, onValue } from 'firebase/database';
import FirebaseApp from './firebase/firebase'; // Importa la configuración de Firebase
import Login from './assets/src/login/login';
interface AuthenticatedUser {
  uid: string;
  email: string | null;
}

export default function App() {
  const [user, setUser] = useState<AuthenticatedUser | null>(null);

  const handleLogout = async () => {
    try {
      const auth = getAuth(FirebaseApp);
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  useEffect(() => {
    const auth = getAuth(FirebaseApp); // Crea una instancia de autenticación
    const unsubscribe = onAuthStateChanged(auth, (authenticatedUser: User | null) => {
      setUser(authenticatedUser);
    });
    return () => {unsubscribe();
    };
  },[] );

    

  useEffect(() => {
    if (user) {
      const database = getDatabase(FirebaseApp);
      const databaseRef = ref(database, "pleh-20a48-default-rtdb");
 // Usa db.collection para obtener una referencia a la base de datos
      // Escucha cambios en la base de datos
      // Puedes utilizar onSnapshot o get para obtener datos
      // Aquí se usa onSnapshot para recibir actualizaciones en tiempo real
      onValue(databaseRef, (snapshot) => {
        const dataFromDatabase = snapshot.val();
        console.log('datos desde la base de datos:', dataFromDatabase);
      });
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Text>PLEH</Text>
      <View style={styles.iniciar}>
        {/* Asumiendo que Login es un componente válido */}
        <Login />
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
