import { getAuth, signOut } from 'firebase/auth';
import appFirebase from '../../../firebase/firebase';
import Botonpanico from './botonpanico';
import React, {useState, useEffect} from 'react';
import { doc, setDoc, collection } from 'firebase/firestore';
import { Modal, View, Text, Button as RNButton, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './types';
import AppNavigator from "../../../Appnavigator"
import AsyncStorage from '@react-native-async-storage/async-storage';
const auth = getAuth(appFirebase);

interface HomeProps {
  route: RouteProp<RootStackParamList, "Home">;
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const Home: React.FC<HomeProps> = ({ route, navigation }) => {
  const { correoUsuario } = route.params || {};
  const [modalVisible, setModalVisible] = useState(false);
  const [contacto, setContacto] = useState('');
  useEffect(() => {
  const verificarPrimerRegistro = async () => {
    try {
      const primerRegistro = await AsyncStorage.getItem('primerRegistro');
      if (primerRegistro) {
        setModalVisible(true);
      }
    }catch (error) {
      console.error('Error al verificar el primer registro:', error);
    }
  }
    verificarPrimerRegistro();
   
  },[]);
  const handlePress = () => {
    navigation.navigate('Panico');  };
  const presionar=()=>{
    //funciondebotondeabi
    navigation.navigate('Preguntas' as never);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Después de cerrar sesión, navega a la pantalla de inicio de sesión
      navigation.navigate('Login'); // Ajustando la ruta según tu estructura
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  };
  const handleGuardarContacto = async () => {
    try {
      const db = appFirebase.firestore();
      const userCollection = collection(db, 'numeros');
      const userDoc = doc(userCollection, auth.currentUser.uid);
      await setDoc(userDoc, { contacto: contacto }, { merge: true });

    } catch (error) {
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido {correoUsuario}</Text>
      <RNButton title="Cerrar Sesión" onPress={handleSignOut} />
      <TouchableOpacity onPress={handlePress} style={styles.panic}>
      <Image 
       source={require('../../img/logo-boton.png')}
       style={styles.botonpanico}
       resizeMode="contain" />
      </TouchableOpacity>
      <Button title='Preguntas' onPress={presionar}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 10,
  },
  panic:{
    height:70,
    width:70,
    alignItems:"flex-end",
    alignSelf:"flex-end",
    
    position:"absolute"
  },
  botonpanico:{
    width:"100%",
    height:"100%",
  }
});

export default Home;
