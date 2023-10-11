import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import appFirebase from "../../../firebase/firebase";
import { LoginFormProps } from "../home/types";
import { RegistrationData } from "../home/types";
import { useNavigation } from "@react-navigation/native";
import AppNavigator from "../../../Appnavigator";

const auth = getAuth();

const RegistroForm = ({ onRegister, buttonText }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");

  const navigation = useNavigation()

  const handleRegister = async () => {
    try {
      if (nombre && dni && password) {
        console.log("Datos de registro:", email, password, nombre, dni);
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);        
        const uid = userCredential.user.uid;
        const registrationData: RegistrationData = { nombre, dni, uid };
        console.log("Usuario registrado con ID:", registrationData.uid);
        await onRegister(email, password, registrationData);
        navigation.navigate('Login');
      } else {
        alert("Por favor, completa todos los campos para el registro.");
      }
    } catch (error) {
      console.log("Error en el registro", error);
    }
  };
  const onRegister = async (email, password, registrationData) => {
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PLEH</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.label}>Nombre</Text>
      <TextInput
        placeholder="Nombre"
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />
      <Text style={styles.label}>DNI</Text>
      <TextInput
        placeholder="DNI"
        style={styles.input}
        value={dni}
        onChangeText={setDni}
      />
      <Button title="Registrarte" onPress={() => handleRegister()} />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
    },
    input: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      marginBottom: 16,
      paddingHorizontal: 8,
    },
    button: {
      backgroundColor: "blue",
      color: "white",
      padding: 12,
      textAlign: "center",
      fontSize: 16,
    },
  });
  
export default RegistroForm;
