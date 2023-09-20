import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@expo/vector-icons'; 
function RetrocederButton() {
    return (
            <TouchableOpacity
              onPress={() => {
              }}
              style={styles.UsuarioButton}
            >
              <FontAwesomeIcon name="user" />
            </TouchableOpacity>
          );
}

const styles = StyleSheet.create({
    RetrocederButton: {
      backgroundColor: 'white',
      color: 'purpura', 
      borderRadius: 5,
      margin: 50,
    },
});


export default RetrocederButton;

