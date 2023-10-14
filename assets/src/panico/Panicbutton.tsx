import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button} from 'react-native';
import { Audio } from 'expo-av';
interface SoundButtonProps {
  soundUri: string;
  }
const Panicbutton: React.FC <SoundButtonProps> = ({ soundUri }) => {
  const playAlarmSound = async () => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('../../sonidos/alaema.mp3')); // Reemplaza 'ruta_del_sonido.mp3' con la ruta real de tu sonido
      await soundObject.playAsync();
    }catch (error) {
      console.error('Error al reproducir el sonido:', error);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.imp}>¡IMPORTANTE!</Text>
      <Text style={styles.pre}>Presione el boton rojo de panico si esta en peligro</Text>
      <Text style={styles.te}>Al accionar el boton de panico se lanzara una alarma a las autoridades y contactos de confianza. 
        MUCHO CUIDADO, el accionarla solo para bromas podria ocasionar problemas legales.</Text>
      <TouchableOpacity onPress={playAlarmSound}>
      <Image 
       source={require('../../img/sirena.png')}
       style={styles.sirena}
       resizeMode="contain"/>
       </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffffff"
    
  },
  sirena:{
    height:300,
    width:300,
  },
  imp:{
    color:"red",
    fontSize:50,
  },
  pre:{
    fontSize:20,
    textAlign:"center"
  },
  te:{
    
  }
});

export default Panicbutton;