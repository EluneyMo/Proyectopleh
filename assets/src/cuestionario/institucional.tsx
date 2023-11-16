import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native'; 

function Institucional(){
    return(
        <View>
            <Text>Violencia Institucional</Text>
            <Image source={require('../tipos/femicidios.jpg')}/>
        </View>
    )
}