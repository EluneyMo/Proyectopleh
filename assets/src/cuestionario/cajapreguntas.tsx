import React from "react";
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet } from "react-native";
import { RootStackParamList } from "../home/types";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

interface PreguntasProps{
  route: RouteProp<RootStackParamList,"Preguntas" >
  navigation: StackNavigationProp <RootStackParamList, "Preguntas">
}

const CajaTipos:React.FC<PreguntasProps>=({route,navigation}) => {
  const movete =()=>{
    navigation.navigate("Tipos")
  }
  return (
    <View  >
      <View style= {{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text>#</Text>
        <Text>Tipos de violencias</Text>
        <Text>#</Text>
      </View>
     
     <TouchableOpacity onPress={movete} style={styles.card}>
        
          <Text style={styles.cardText}>Violencia Domestica</Text>
          <Text style={{ color: "#999" }}>La violencia no es solo matar a otro</Text>
          <Image source={require("../tipos/Domestica.jpg")} style={styles.cardimagen} />
         
           
      </TouchableOpacity>


       
          <Text style={styles.cardText}>Violencia Sexual </Text>
          <Image source={require("../tipos/images.jpeg")} style={styles.cardimagen} />


      
         <Text style={styles.cardText}>Violencia Laboral</Text>
         <Image source={require("../tipos/laboral.jpeg")} style={styles.cardimagen} />
         
        
         
       
       
         <Text style={styles.cardText}>Femicidio</Text>
         <Image source={require("../tipos/femicidios.jpg")} style={styles.cardimagen} />
                
     

     
       
       
         <Text style={styles.cardText}>Violencia Institucional</Text>
         <Image source={require("../tipos/institucional.jpeg")} style={styles.cardimagen} />
         
         
       
          
         <Text style={styles.cardText}>Violencia Mediática</Text>
         <Image source={require("../tipos/mediatica.png")} style={styles.cardimagen} />
            
       
      
         <Text style={styles.cardText}>Acoso</Text>
         <Image source={require("../tipos/acoso.jpeg")} style={styles.cardimagen} />
         
       
       
       
         <Text style={styles.cardText}>Violencia Psicologica</Text>
         <Image source={require("../tipos/psicologica.jpeg")} style={styles.cardimagen} />
       
       
       
         <Text style={styles.cardText}>Violencia Economica y Patrimonial</Text>
         <Image source={require("../tipos/economica.jpeg")} style={styles.cardimagen} />
             
       
       
         <Text style={styles.cardText}>Violencia Física</Text>
         <Image source={require("../tipos/fisica.jpg")} style={styles.cardimagen} />
         
         
      
 

      
      
      <Text>Noticias Recientes</Text>


      
      <View style={styles.cardNoticias}>
        <Image
          source={require("../tipos/noticia1.png")} style={styles.cardimagen} />
        <View>
          <Text style={styles.title}>Una mujer denunció que un amigo la acompañó a su casa, la amenazó con un cuchillo y la violó</Text>
          <Text>
            Una joven de 20 años denunció que un amigo, tras acompañarla a su casa en la
            localidad de Oberá, Misiones, la amenazó con un cuchillo, la violó repetidas veces y grabó el ataque con un
            celular, el domingo a la madrugada. Tras ello el hombre que fue detenido y su casa, allanada en busca de indicios
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL("https://www.lanacion.com.ar/seguridad/misiones-una-mujer-denuncio-que-un-amigo-la-acompano-a-su-casa-la-amenazo-con-un-cuchillo-y-la-violo-nid04102023/")}>
            <Text>Ver más información</Text>
          </TouchableOpacity>
        </View>

         
      </View>

    </View>
  );
}


const styles = StyleSheet.create({

  card: {
    backgroundColor: '#fff',
    width: 300,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },

  cardText:{
    color: '#555',
    fontSize: 18,
    textAlign: 'center',

  },

  cardimagen: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },

  cardNoticias: {
    backgroundColor: '#fff',
    width: 300,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height:2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },


})


export default CajaTipos;

