import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function Botonpanico({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} className="boton">
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
