import React from "react";
import { View, Text, Image } from 'react-native';

function Tipos() {
  return (
    <View>
      <Text>Violencia de Género</Text>
      <Image source={require('../tipos/violenciagenero.jpeg')} style={{ width: 100, height: 100 }} />
      
    </View>
  );
}


