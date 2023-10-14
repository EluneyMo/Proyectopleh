import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button} from 'react-native';
import { Audio } from 'expo-av';
interface SoundButtonProps {
  soundUri: string;
  }
const Panicbutton: React.FC <SoundButtonProps> = ({ soundUri }) => {
  const playAlarmSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        { uri: soundUri },
        { shouldPlay: true }
      );
    }catch (error) {
      console.error('Error al reproducir el sonido:', error);
    }
  }
  return (
    <View style={styles.container}>
      <Text>¡IMPORTANTE!</Text>
      <Text>Presione el boton rojo de panico si esta en peligro</Text>
      <Text>Al accionar el boton de panico se lanzara una alarma a las autoridades y contactos de confianza. 
        MUCHO CUIDADO, el accionarla solo para bromas podria ocasionar problemas legales.</Text>
      <Image 
       source={require('../../img/sirena.png')}
       style={styles.sirena}
       resizeMode="contain"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  sirena:{

  }
});

export default Panicbutton;