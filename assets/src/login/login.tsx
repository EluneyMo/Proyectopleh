import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInAnonymously} from "firebase/auth"
import "firebase/auth"
import {LinearGradient} from "expo-linear-gradient"
import * as Google from "expo-google-app-auth"
import appFirebase from "../../../firebase/firebase";
import { useNavigation } from '@react-navigation/native';
import { FirebaseError } from "firebase/app";
import firebase from "firebase/app"
import "firebase/auth"
import Toast from "react-native-toast-message";
const auth = getAuth(appFirebase);
const provider = new GoogleAuthProvider();
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignIn = async () => {
    try {
      
      setPasswordError("");

      // Validando campos
      if (!email) {
        setEmailError("Por favor, ingresa tu email");
        return;
      }

      if (!password) {
        setPasswordError("Por favor, ingresa tu contraseña");
        return;
      }

      // Autenticando utilizando Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // Usuario autenticado
      const user = userCredential.user;
      console.log("Usuario autenticado:", user);

      // Navegando a la pantalla Home después de la autenticación exitosa
      navigation.navigate("Home", { correoUsuario: email });
    } catch (error) {
      // Manejando errores de autenticación
      const authError = error as FirebaseError;
      console.error("Error en el inicio de sesion ", authError);
      Alert.alert('Error en el inicio de sesión', authError.message || 'Error desconocido');

      // Actualizando mensajes de error específicos
      if (authError.code === "auth/invalid-email") {
        setEmailError("El formato del email no es válido");
      } else if (authError.code === "auth/wrong-password") {
        setPasswordError("Contraseña incorrecta");
      }
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigation.navigate("Home" as never)
    } catch (error) {
      console.error("Error en el inicio de sesión con Google:", error);
    }
  }
  const signInasGuest=async()=>{
    try{
      
    await signInAnonymously(auth);
    navigation.navigate("Home" as never)
  }catch (error){
    console.error("Error al iniciar sesión como invitado:", error);
  }
  
};
  const navigateToRegistro = () => {
    // Navegando a la pantalla de registro
    navigation.navigate("Registro");
  };

  return (
    <LinearGradient
    >
    <View style={styles.container }>
      <Text style={styles.header}>Iniciar Sesión</Text>
      <Text>Email</Text>
      <TextInput
        placeholder="Ingresa tu email"
        value={email}
        onChangeText={setEmail}
        style={emailError ? styles.inputError : styles.input}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <Text>Contraseña</Text>
      <TextInput
        placeholder="Ingresa tu contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={passwordError ? styles.inputError : styles.input}
      />
     {passwordError ? <Text style={{ color: "red" }}>{passwordError}</Text> : null}

      <Button title="Iniciar Sesión" onPress={handleSignIn} />
      <Button title="¿No tienes cuenta? Regístrate aquí." onPress={navigateToRegistro} />
      <Button title="Sign in with Google" onPress={handleGoogleSignIn} />
      <Button title="Ingresar como invitado" onPress={signInasGuest}/>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  botoncito:{
    width: 192,
    height:48
  },
  container: {
   
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default Login;
