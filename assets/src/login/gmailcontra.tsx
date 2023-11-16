import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { Auth, getAuth, sendPasswordResetEmail } from 'firebase/auth';
import appFirebase from '../../../firebase/firebase';
const auth=getAuth(appFirebase)

const enviargmai=()=>{
    const [email, setEmail] = useState('');
    const handleResetPassword = async (email: string) => {
        try {
          await sendPasswordResetEmail(auth, email);
          console.log("Se ha enviado un correo electrónico de restablecimiento de contraseña.");
        } catch (error) {
          console.error("Error al enviar el correo electrónico de restablecimiento de contraseña:", error);
        }
      };
      return(
        <View>
            <Text>Restablecer contraseña</Text>
        </View>
      )
}
export default enviargmai