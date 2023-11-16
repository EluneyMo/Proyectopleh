import React from "react"
import { View, Text, Image, StyleSheet } from 'react-native';  


function Acoso(){
    return(
        <View>
            <Text>Violencia Mediatica</Text>
            <Image source={require('../tipos/acoso.jpeg')} />
            <Text>
            El acoso, en sus diversas formas, a menudo se camufla entre las interacciones cotidianas, pasando desapercibido para quienes no están directamente involucrados. Desde comentarios inapropiados hasta conductas más insidiosas, el acoso puede esconderse detrás de una apariencia de normalidad, eclipsando su gravedad. Es crucial desarrollar una sensibilidad hacia las sutilezas del acoso y reconocer que este no siempre se presenta de manera evidente. Comentarios con doble sentido, exclusiones deliberadas y comportamientos invasivos pueden ser manifestaciones de acoso que, al no ser confrontadas, perpetúan un entorno tóxico. Fomentar la empatía, la educación y el establecimiento de límites claros son pasos esenciales para prevenir y abordar el acoso, creando así entornos más seguros y respetuosos.
            </Text>
            
        </View>
    )
}