import React from "react"
import { View, Text, Image, StyleSheet } from 'react-native';  


function Mediática() {
    return(
        <View style={styles.container}>
            <Text>Violencia Mediatica</Text>
            <Image source={require('../tipos/mediatica.png')}/>
            <Text>
                A menudo, la violencia mediática se manifiesta de manera sutil, infiltrándose
                en nuestras vidas diarias sin que nos demos cuenta de sus efectos. El constante
                bombardeo de imágenes, discursos y narrativas que perpetúan estereotipos, 
                promueven la discriminación o desvalorizan a ciertos grupos puede pasar 
                desapercibido, ya que se integra en nuestra cultura de manera insidiosa. 
                La violencia mediática no solo se limita a imágenes gráficas, sino también a 
                la manipulación de la información, la difamación y la exclusión de voces diversas. 
                Es esencial desarrollar un pensamiento crítico para reconocer estas formas de 
                violencia, cuestionar la veracidad de las narrativas y promover un consumo 
                mediático consciente que fomente la diversidad, la equidad y el respeto.
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    
})