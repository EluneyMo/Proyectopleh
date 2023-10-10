import { getAuth, signOut } from 'firebase/auth';
import appFirebase from '../../../firebase/firebase';
import Botonpanico from './botonpanico';
import React from 'react';
import { View, Text, Button as RNButton, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './/types';
import AppNavigator from "../../../Appnavigator"
const auth = getAuth(appFirebase);

interface HomeProps {
  route: {
    params: {
      correoUsuario?: string;
    };
  };
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const Home: React.FC<HomeProps> = ({ route, navigation }) => {
  const { correoUsuario } = route.params || {};

  const handlePress = () => {
    navigation.navigate('PanicButton');
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Después de cerrar sesión, navegar a la pantalla de inicio de sesión
      navigation.navigate('Login'); // Ajusta la ruta según tu estructura
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido {correoUsuario}</Text>
      <RNButton title="Cerrar Sesión" onPress={handleSignOut} />
      <Botonpanico title="BOTONPANICO" onPress={handlePress} />
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
});

export default Home;
