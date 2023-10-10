// Importar los componentes y los paquetes necesarios
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import appFirebase from "../../../firebase/firebase";
import App from "../../../App";
import "./login.css"
  const auth=getAuth(appFirebase)
 
   
  const Login = () => {
    const [registrando, setRegistrando] = useState(false);
  
    const functAutenticacion = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const correo = e.currentTarget.email.value;
      const contraseña = e.currentTarget.password.value;
  
      if (registrando) {
        try {
          await createUserWithEmailAndPassword(auth, correo, contraseña);
        } catch (error) {
          alert("Asegurese de que la contraseña tenga 8 caracteres");
        }
      } else {
        try {
          await signInWithEmailAndPassword(auth, correo, contraseña);
        } catch (error) {
          alert("El correo o la contraseña son incorrectos");
        }
      }
    };
  
    return (
      <View>
        <h1 className="pleh">PLEH</h1>
        <Text style={styles.emailText}>Email</Text>
        <form onSubmit={functAutenticacion}>
          <input
            type="email"
            placeholder="email-address"
            id="email"
          />
          <Text>Tu información no será compartida con nadie.</Text>
          <Text>Contraseña</Text>
          <input
            type="password"
            placeholder="contraseña"
            id="password"
          />
          <button className="btnform" type="submit">{registrando ? "Registrate" : "Inicia sesion"}</button>
        </form>
  
        <h4>{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}<button onClick={() => setRegistrando(!registrando)}>{registrando ? "Inicia sesion" : "Registrate"}</button></h4>
      </View>
    );
  }
  
  // Crear el objeto de estilo con el paquete StyleSheet
  const styles = StyleSheet.create({
    
    emailText:{
      color:"blue"
    }
  });
  
  // Exportar el componente de login
  export default Login;