// Importar los componentes y los paquetes necesarios
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { getAuth, createUserWithEmailandPassword, signInWithEmailAndPassword } from "firebase/auth"
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import firebaseConfig  from "../../../firebase/firebase"
  const auth=getAuth(appFirebase)

  
    const validateEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    };
  const Login =()=>{
  // Retornar el componente de la pantalla de login
  //funcion para guardar y llamar registro
  
  return (
    <View>
      <Text>Email</Text>
      <div style={{color: 'red'}}>{errorMesage}</div>
      <input
        type="email"
        placeholder="email-address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Text>Tu información no será compartida con nadie.</Text>
      <Text>Contraseña</Text>
      <input
        type="password"
        placeholder="contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button title="Enviar" onPress={handleLogin} />
      
    
    </View>
    
  );
}

// Crear el objeto de estilo con el paquete StyleSheet
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    margin: 10,
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    padding: 10,
    margin: 10,
  },
});

// Exportar el componente de login
export default Login;
