import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Panicbutton: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>¡Estás en la siguiente pantalla!</Text>
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