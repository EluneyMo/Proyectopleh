import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

import appFirebase from "../../../firebase/firebase";
import { RegistrationData } from "../home/types";

const auth = getAuth();
const db = getFirestore(appFirebase);

const RegistroForm = () => {
  const [inputEmail, setEmail] = useState("");
  const [inputPassword, setPassword] = useState("");
  const [inputNombre, setNombre] = useState("");
  const [inputDni, setDni] = useState("");

  const navigation = useNavigation();

  const handleRegister = async () => {
    try {
      if (inputNombre && inputDni && inputPassword) {
        console.log("Datos de registro:", inputEmail, inputPassword, inputNombre, inputDni);
        const userCredential = await createUserWithEmailAndPassword(auth, inputEmail, inputPassword);
        const uid = userCredential.user.uid;
        const registrationData: RegistrationData = { nombre: inputNombre, dni: inputDni, uid };

        // Guardar datos en Firestore
        await addDoc(collection(db, "usuarios"), registrationData);

        console.log("Usuario registrado con ID:", registrationData.uid);
        // Note: It's not necessary to call RegisterUser here; you've already registered the user
        alert("Usuario registrado de forma exitosa");
        navigation.navigate('Login');
      } else {
        alert("Por favor, completa todos los campos para el registro.");
      }
    } catch (error) {
      console.log("Error en el registro", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PLEH</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={inputEmail}
        onChangeText={setEmail}
      />
      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        value={inputPassword}
        onChangeText={setPassword}
      />
      <Text style={styles.label}>Nombre</Text>
      <TextInput
        placeholder="Nombre"
        style={styles.input}
        value={inputNombre}
        onChangeText={setNombre}
      />
      <Text style={styles.label}>DNI</Text>
      <TextInput
        placeholder="DNI"
        style={styles.input}
        value={inputDni}
        onChangeText={setDni}
      />
      <Button title="Registrate" onPress={() => handleRegister()} />
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
