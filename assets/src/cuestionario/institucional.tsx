import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native'; 

function Institucional(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Violencia Institucional</Text>
            <Image source={require('../tipos/femicidios.jpg')} style={styles.imagen}/>
            <Text style={styles.descripcion}>
                A veces, la violencia institucional puede ser sutil y pasar desapercibida, pero es importante estar 
                consciente de sus manifestaciones para poder abordarlas de manera efectiva. 
                Esta forma de violencia puede incluir acciones indebidas por 
                parte de las instituciones gubernamentales, como la policía o el sistema judicial. La discriminación, 
                el uso excesivo de la fuerza, la detención injustificada o el trato 
                desigual son solo algunas de las expresiones de la violencia institucional. 
                A menudo, las personas pueden no darse cuenta de que están siendo víctimas de este 
                tipo de violencia, ya que las prácticas injustas pueden estar arraigadas 
                en sistemas más amplios. Es crucial estar atentos/as a las señales, buscar 
                información y, si es necesario, buscar apoyo para poner fin a estas situaciones 
                y promover un cambio hacia sistemas más justos y equitativos.
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    imagen: {
        width: 250,
        height: 250,
    },
    descripcion:{
        fontSize: 16,
    }


})