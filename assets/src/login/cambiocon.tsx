import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity} from "react-native";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInAnonymously, updatePassword, EmailAuthProvider } from "firebase/auth";
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
const handleChangePassword = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const credential = auth.EmailAuthProvider.credential(user.email, currentPassword);
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword);
        console.log('Password updated successfully');
    } else {
      console.log('Unable to get the current user');
    }
  } catch (error) {
    console.error('Error changing password:', error.message);
  }
};
    }
  }

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
export default cambiocon;