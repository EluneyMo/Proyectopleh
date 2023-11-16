import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';  

function Sexual() {
    return(
        <View  style={styles.container}>
            <Text style={styles.title}>Violencia Sexual</Text>
            <Image source={require('../tipos/images.jpeg')} style={styles.imagen} />
            <Text style={styles.descripcion}>
                 Violencia sexual es que
                te impidan decidir libremente sobre tu sexualidad,
                que no puedas elegir con
                quién, cómo, dónde y
                cuándo tener relaciones
                sexuales. También que te
                fuercen a hacer algo durante
                un encuentro sexual a
                través de amenazas, insultos, uso de la fuerza
                física, armas o por no
                poder brindar libremente
                tu consentimiento, por
                ejemplo, por el uso de alcohol u otras sustancias.
                La violencia sexual puede ser ejercida
                por una o varias personas, sean extrañas o conocidas como familiares,
                pareja, ex pareja, amigxs, compañerxs
                de trabajo o de estudio o una persona
                que abusa de un vínculo de confianza
                o de superioridad.
            </Text>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
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
    imagen:{
        
    }

})