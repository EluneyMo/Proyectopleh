import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';  


function Laboral() {
    return(
        <View >
            <Text>Violencia Laboral</Text>
            <Image source={require('../tipos/laboral.jpeg')}></Image>
        </View>
    )
}