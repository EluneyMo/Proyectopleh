import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ToastAndroid  } from 'react-native'
import { Auth, getAuth, sendPasswordResetEmail } from 'firebase/auth';
import "firebase/functions";
import { useNavigation } from '@react-navigation/native';
import appFirebase from '../../../firebase/firebase';

const auth=getAuth(appFirebase)

const enviargmai=()=>{
  const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const handleResetPassword = async (email: string) => {
        try {
          await sendPasswordResetEmail(auth, email);
          console.log("Se ha enviado un correo electrónico de restablecimiento de contraseña.");
          alert("Se ha enviado un correo electrónico de restablecimiento de contraseña.");
          navigation.navigate("Login" as never)

        } catch (error) {
          console.error("Error al enviar el correo electrónico de restablecimiento de contraseña:", error);
          alert ("Error al enviar el correo electrónico de restablecimiento de contraseña")
        }
      };
      return(
        <View>
            <Text>Restablecer contraseña</Text>
            <Text>Introduce el gmail que deseas cambiar la contraseña, y se le enviara un correo electronico</Text>
            <TextInput
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
           />
           <Button title="Enviar" onPress={() => handleResetPassword(email)}></Button>
        </View>
      )
}
export default enviargmai