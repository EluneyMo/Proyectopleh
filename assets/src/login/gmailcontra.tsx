import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Auth, getAuth, sendPasswordResetEmail } from 'firebase/auth';
import "firebase/functions";
import { useNavigation } from '@react-navigation/native';
import appFirebase from '../../../firebase/firebase';
import { grey } from '@mui/material/colors';
import { height } from '@mui/system';

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
         
      };
      return(
        <LinearGradient
        colors={['darkmagenta', 'darkviolet']}
        style={styles.container}
        >
        <View>
            <Text style={styles.restablecer}>Restablecer contraseña</Text>
            <Text style={styles.largo}>Introduce el gmail que deseas cambiar la contraseña, y se le enviara un correo electronico
            
            
            </Text>
            <TextInput
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            style={styles.cosito}
           /> 
          <TouchableOpacity onPress={handleResetPassword(email)} style={styles.botoon}>
           <Text style={styles.botoontexto}>Enviar</Text>
         </TouchableOpacity>
        </View>
        </LinearGradient>
      )
}
const styles=StyleSheet.create({
restablecer:{
  fontSize:40,
  textAlign:'center',
  fontWeight: "bold",
  color:"white"
},
largo:{
fontSize:20,
textAlign:"center",
color:"white"
},
cosito:{
  height: 40,
  width: 350,
  display:"flex",
  alignSelf:"center",
  justifyContent:"center",
  alignItems: "center",
  alignContent: "center",
  borderColor: "gray",
  borderWidth: 1,
  marginBottom: 16,
  paddingHorizontal: 8,
  borderRadius:20,
  backgroundColor:"white",
  color: "grey"
},
container: {
   
  flex: 1,
  justifyContent: "center",
  padding: 16,
},
botoon:{
  width:250,
  height:50,
  alignItems: "center",
  alignSelf:"center",
  color:"darkmagenta",
  backgroundColor:"white",
  fontSize:20,
  borderRadius:20,
},
botoontexto:{
  fontWeight: "bold",
  fontSize:20,
  textAlign:"center",
  padding:12
}
})
export default enviargmai