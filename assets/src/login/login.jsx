// Importar los componentes y los paquetes necesarios
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { getAuth, createUserWithEmailandPassword, signInWithEmailAndPassword } from "firebase/auth"
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import appFirebase from "../../../firebase/firebase";
  const auth=getAuth(appFirebase)
 
    const validateEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    };
  const Login =()=>{
  // Retornar el componente de la pantalla de login
  //funcion para guardar y llamar registro
  const [registrando, setRegistrando]=useState(false)
  const functAutenticacion=async(e)=>{
    e.preventDefault();
    const correo=e.target.email.value;
    const contraseña=e.target.password.value;
    console.log(correo, contraseña)
    if (registrando){
      try{
        await createUserWithEmailandPassword(auth,correo,contraseña)
      } catch (error){
        alert("Asegurese de que la contraseña tenga 8 caracteres")
      }
    } 
    else{
      try {
        await signInWithEmailAndPassword(auth,correo,contraseña)
      }catch(error){
        alert("El correo o la contraseña son incorrectos")
      }
     
    }
  }
  return (
    <View>
      <Text>Email</Text>
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
    <button className="btnform">{registrando ? "Registrate":"Inicia sesion"}</button>
      </form>
    
      <h4>{registrando ?  "Si ya tienes cuenta" : "No tienes cuenta"}<button onClick={()=>setRegistrando(!registrando)}>{registrando ? "Inicia sesion":"Registrate"}</button></h4>
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
