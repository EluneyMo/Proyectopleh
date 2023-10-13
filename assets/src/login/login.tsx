import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import {GoogleSigninButton} from "@react-native-google-signin/google-signin"
import appFirebase from "../../../firebase/firebase";
import { useNavigation } from '@react-navigation/native';
import { FirebaseError } from "firebase/app";
import Toast from "react-native-toast-message";

const auth = getAuth(appFirebase);

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
  const handleGoogleSignIn= async()=> {
  try{
    //Agregando creacion de usuario con google
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log('Usuario de Google:', result.user);
    navigation.navigate('Home' as never);
  }catch(error){
    console.error('Error en el inicio de sesión con Google:', error);
  }
  }
  const navigateToRegistro = () => {
    // Navegando a la pantalla de registro
    navigation.navigate("Registro");
  };

  return (
    <View style={styles.container}>
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
      <GoogleSigninButton
      style={{ width: 192, height: 48 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
