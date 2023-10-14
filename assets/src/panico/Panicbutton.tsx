import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Panicbutton: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>¡IMPORTANTE!</Text>
      <Text>Presione el boton rojo de panico si esta en peligro</Text>
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