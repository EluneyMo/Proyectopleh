import React, { useState, useEffect } from "react";
import { View, TextInput, Button } from "react-native";
import { getAuth, signInWithEmailAndPassword, User } from "firebase/auth";
import { getFirestore, doc, DocumentData, updateDoc,getDoc, FirestoreError } from 'firebase/firestore';

import { FirebaseError } from "firebase/app";
import firebase from "firebase/app";
import appFirebase from "../../../firebase/firebase";

interface MyFormProps {
    onAuthenticate: (email: string, password: string) => Promise<void>;
  }
  
  const auth = getAuth(appFirebase);
  
  const MyForm: React.FC<MyFormProps> = ({ onAuthenticate }) => {
    const [nombre, setName] = useState<string>('');
    const [apellido, setSurname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [telefono, setPhone] = useState<string>('');
    const [direccion, setAddress] = useState<string>('');
    const [dni, setIdentityNumber] = useState<string>('');
  
    useEffect(() => {
      const fetchUserData = async () => {
        const currentUser = auth.currentUser as User | null;
        if (currentUser) {
          const userId = currentUser.uid;
          const userRef = doc(getFirestore(appFirebase), 'usuarios', userId);
  
          try {
            const docSnapshot = await getDoc(userRef);
            if (docSnapshot.exists()) {
              const data = docSnapshot.data();
              if (data) {
                setName(data.nombre);
                setSurname(data.apellido);
                setEmail(data.email);
                setPhone(data.telefono);
                setAddress(data.direccion);
                setIdentityNumber(data.dni);
              }
            } else {
              console.log('No such document!');
            }
          } catch (error) {
            console.log('Error getting document:', error);
          }
        }
      };
  
      fetchUserData();
    }, []);
  
    const handleUpdate = async () => {
      const currentUser = auth.currentUser as User | null;
      if (currentUser) {
        const userId = currentUser.uid;
        const userRef = doc(getFirestore(appFirebase), 'usuarios', userId);
  
        try {
          await updateDoc(userRef, {
            nombre,
            apellido,
            email,
            telefono,
            direccion,
            dni,
          });
          console.log('User information updated successfully!');
        } catch (error) {
          console.log('Error updating user information:', error);
        }
      }
    };
  
  return (
    <View>
      <TextInput
        placeholder="Name"
        value={nombre}
        onChangeText={(text) => setName(nombre)}
      />
      <TextInput
        placeholder="Surname"
        value={apellido}
        onChangeText={(text) => setSurname(text)}
      />
      <TextInput
        placeholder="Identity Number"
        value={dni}
        onChangeText={(text) => setIdentityNumber(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Phone"
        value={telefono}
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        placeholder="Address"
        value={direccion}
        onChangeText={(text) => setAddress(text)}
      />
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

export default MyForm;
