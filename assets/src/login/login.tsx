// Importar los componentes y los paquetes necesarios
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import appFirebase from "../../../firebase/firebase";
import { useNavigation } from '@react-navigation/native';  // Importa el hook de navegación

const auth = getAuth(appFirebase);

const Login = () => {
  const [registrando, setRegistrando] = useState(false);
  const navigation = useNavigation();  // Inicializa el hook de navegación

  const functAutenticacion = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const correo = e.currentTarget.email.value;
    const contraseña = e.currentTarget.password.value;

    try {
      if (registrando) {
        await createUserWithEmailAndPassword(auth, correo, contraseña);
      } else {
        await signInWithEmailAndPassword(auth, correo, contraseña);
        // Si el inicio de sesión es exitoso, navega a la pantalla Home
        navigation.navigate('Home', { correoUsuario: correo });
      }
    } catch (error) {
      if (registrando) {
        alert("Asegúrate de que la contraseña tenga 8 caracteres");
      } else {
        alert("El correo o la contraseña son incorrectos");
      }
    }
  };

  return (
    <View>
      <Text className="pleh">PLEH</Text>
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
        <Button className="btnform" type="submit">{registrando ? "Regístrate" : "Inicia sesión"}</Button>
      </form>

      <Text>{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}<Button onClick={() => setRegistrando(!registrando)}>{registrando ? "Inicia sesión" : "Regístrate"}</Button></Text>
    </View>
  );
}

// Crear el objeto de estilo con el paquete StyleSheet
const styles = StyleSheet.create({
  emailText: {
    color: "blue"
  }
});

// Exportar el componente de login
export default Login;
