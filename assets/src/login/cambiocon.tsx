import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity} from "react-native";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInAnonymously, updatePassword } from "firebase/auth";
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
const cambiocon=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState(""); // Nuevo estado
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");
const handleChangePassword = async () => {
    try {
      if (!auth.currentUser) {
        // Handle the case where the user is not authenticated
        // You might want to redirect the user to the login screen or show a message
        console.warn("User not authenticated");
        return;
      }
  
      if (!newPassword) {
        setNewPasswordError("Por favor, ingresa tu nueva contraseña");
        return;
      }
  
      // Change password using Firebase
      await updatePassword(auth.currentUser, newPassword);
  
      // Success in changing the password
      Toast.show({
        type: 'success',
        text1: 'Contraseña cambiada con éxito',
      });
  
      // You can clear the password fields if desired
      setPassword("");
      setNewPassword("");
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error);
      // Handle errors and show messages to the user
    }
  };
}