import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';  


function Laboral() {
    return(
        <View style={styles.container}>
            <Text>Violencia Laboral</Text>
            <Image source={require('../tipos/laboral.jpeg')}></Image>
            <Text>
            La violencia en el entorno laboral abarca una amplia gama de comportamientos perjudiciales,
            desde acoso verbal y psicológico hasta agresiones físicas. Puede ocurrir entre colegas,
            entre empleados y empleadores, o incluso entre clientes y empleados. 
            La clave para combatirla es identificarla a tiempo.
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        
    }
})