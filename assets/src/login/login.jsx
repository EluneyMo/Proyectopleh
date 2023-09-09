// Importar los componentes y los paquetes necesarios
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth"
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import FirebaseApp from "../../../firebase/firebase"
import { Link } from "@react-navigation/native";
import Registro from "../registro/register";
import { useNavigation } from '@react-navigation/native'
  function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMesage, setErrorMessage]= useState("");
    const handleLogin = async () => {
      console.log(email);
      if (!validateEmail(email)){
        
        setErrorMessage("Correo electrónico inválido");
        return;
      }
      try {
        const auth= getAuth(FirebaseApp)
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Usuario autenticado");
        const database = getDatabase();
        const user = userCredential.user;
        if (auth.currentUser){
          const userRef = ref(database, `users/${auth.currentUser.uid}`);
          await set(userRef, {
            email: auth.currentUser.email,
            password: password
          });
        }
      } catch (error) {
        console.error("Error al iniciar sesión:", error.message);
      }
    };
  
    const validateEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    };
  
  // Retornar el componente de la pantalla de login
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
      
    <Text>Crear una cuenta</Text>
    <Button
    title="AQUI"
    onPress=<Link to="../registro/register.jsx"/>
    />
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
