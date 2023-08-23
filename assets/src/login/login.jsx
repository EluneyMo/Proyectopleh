// Importar los componentes y los paquetes necesarios
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Firebase from "../../../firebase/firebase";

function Login() {
  // Crear los estados para el email y la contraseña
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Crear la función para manejar el inicio de sesión
  const handleLogin = async () => {
    
    try {
      // Usar el servicio de autenticación de Firebase para iniciar sesión con email y contraseña
      await Firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("Usuario autenticado");
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  };

  // Retornar el componente de la pantalla de login
  return (
    <View>
      <Text>Email</Text>
      <input
        type="email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text>Tu información no será compartida con nadie.</Text>
      <Text>Contraseña</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button style={styles.button} title="Enviar" onPress={handleLogin} />
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
