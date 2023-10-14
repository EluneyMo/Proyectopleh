import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button} from 'react-native';

const Panicbutton: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>¡IMPORTANTE!</Text>
      <Text>Presione el boton rojo de panico si esta en peligro</Text>
      <Text>Al accionar el boton de panico se lanzara una alarma a las autoridades y contactos de confianza. 
        MUCHO CUIDADO, el accionarla solo para bromas podria ocasionar problemas legales.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Panicbutton;