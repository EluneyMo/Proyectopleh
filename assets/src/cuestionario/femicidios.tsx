import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';  

function Femicidio(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Femicidios</Text>
            <Image source={require('../tipos/femicidios.jpg')} style={styles.imagen}/>
            <Text style={styles.descripcion}>
            En Argentina, el término comenzó a popularizarse en la década del 2000, de la mano 
            de los movimientos feministas que enunciaban y 
            denunciaban como un hecho político y social los asesinatos de mujeres causados
            por hombres y motivados por la violencia machista. 
            Poco a poco, el concepto de femicidio fue extendiéndose y en la prensa y
            en la vida cotidiana comenzó titánica lucha de por medio
            a reemplazar al deleznable término de “crimen pasional”.
            </Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    imagen:{
        width: 250,
        height: 250,
    },
    descripcion:{
        fontSize: 16,
    }
  



})