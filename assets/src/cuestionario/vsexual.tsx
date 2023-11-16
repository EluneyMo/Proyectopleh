import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';  

function Sexual{
    return(
        <View  style={styles.container}>
            <Text style={styles.title}>Violencia Sexual</Text>
            <Image source={require('../tipos/images.jpeg')} style={styles.imagen} />
        </View>

    );
}