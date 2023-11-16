import React from "react"
import { View, Text, Image, StyleSheet } from 'react-native';  


function Acoso(){
    return(
        <View>
            <Text>Violencia Mediatica</Text>
            <Image source={require('../tipos/acoso.jpeg')} />
        </View>
    )
}