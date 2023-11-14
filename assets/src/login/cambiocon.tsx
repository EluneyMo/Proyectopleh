import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity} from "react-native";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInAnonymously, updatePassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import "firebase/auth"
import {LinearGradient} from "expo-linear-gradient"
import * as Google from "expo-google-app-auth"
import appFirebase from "../../../firebase/firebase";
import { useNavigation } from '@react-navigation/native';
import { FirebaseError } from "firebase/app";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, collection, doc, setDoc,DocumentReference, DocumentData  } from 'firebase/firestore';
import firebase from "firebase/app"
import "firebase/auth"
import Toast from "react-native-toast-message";
const auth = getAuth(appFirebase);
const cambiocon=()=>{
  
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  
  const [newPasswordError, setNewPasswordError] = useState('');
const handleChangePassword = async () => {
  try {
    const user = auth.currentUser;
    if (user) {
      if (user.email !== null) { // Verifica que user.email no sea nulo
        const credential = EmailAuthProvider.credential(user.email, currentPassword);
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword);
        console.log('Contraseña actualizada correctamente');
      } else {
        console.log('El correo electrónico del usuario es nulo.');
      }
    } else {
      console.log('No se pudo obtener el usuario actual');
    }
  } catch (error:any) {
    console.error('Error al cambiar la contraseña:', error.message);
  }
};
  return(
    <View style={styles.container}>
    <Text style={styles.textito}>Nueva Contraseña</Text>
    <TextInput
      placeholder="Ingresa tu nueva contraseña"
      secureTextEntry
      value={newPassword}
      onChangeText={setNewPassword}
      style={newPasswordError ? styles.inputError : styles.input}
    />
    {newPasswordError ? (
      <Text style={styles.errorText}>{newPasswordError}</Text>
    ) : null}
    <Button title="Cambiar Contraseña" onPress={handleChangePassword} />
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  textito: {
    color:"white",
    textAlign:"center"
  },
  input: {
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
    borderRadius:20
  },
  inputError: {
  },
  errorText: {
  },
});
export default cambiocon;