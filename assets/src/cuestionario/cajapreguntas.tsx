import React  from "react"
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet} from "react-native";
import { RootStackParamList } from "../home/types";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Institucional from "./institucional";

interface PreguntasProps{
  route: RouteProp<RootStackParamList,"Preguntas" >
  navigation: StackNavigationProp <RootStackParamList, "Preguntas">
}

const CajaTipos:React.FC<PreguntasProps>=({route,navigation}) => {
  const movete =()=>{
    navigation.navigate("Tipos")
    
  }
  const instucional =()=>{
    navigation.navigate('Institucional' as never)
  }
  const sexual =()=>{
    navigation.navigate('Sexual' as never)
  }
  const laboral =()=>{
    navigation.navigate('Laboral' as never)
  }
  const femicidio =()=>{
    navigation.navigate('Femicidio' as never)
  }
  const mediatica =()=>{
    navigation.navigate('Mediatica' as never)
  }
  const acoso =()=>{
    navigation.navigate('Acoso' as never)
  }

  return (
    <View  >
        <View style= {{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text>#</Text>
          <Text style={styles.titulo}>Tipos de violencias</Text>
          <Text>#</Text>
        </View>

        
            <View style={styles.container}>
              
              <TouchableOpacity onPress={movete} style={styles.card}>
                  
                <Text style={styles.cardText}>Violencia Domestica</Text>
                
                <Image source={require("../tipos/Domestica.jpg")} style={styles.cardimagen} />
              
                    
              </TouchableOpacity>


              <TouchableOpacity onPress={sexual} style={styles.card}> 
                <Text style={styles.cardText}>Violencia Sexual </Text>
                <Image source={require("../tipos/images.jpeg")} style={styles.cardimagen} />
              </TouchableOpacity>  


              <TouchableOpacity onPress={laboral} style={styles.card}>     
                <Text style={styles.cardText}>Violencia Laboral</Text>
                <Image source={require("../tipos/laboral.jpeg")} style={styles.cardimagen} />
              </TouchableOpacity> 
                
              
              <TouchableOpacity onPress={femicidio} style={styles.card}>  
                <Text style={styles.cardText}>Femicidio</Text>
                <Image source={require("../tipos/femicidios.jpg")} style={styles.cardimagen} />
              </TouchableOpacity>           
            

            
              
              <TouchableOpacity onPress={instucional} style={styles.card}>  
                <Text style={styles.cardText}>Violencia Institucional</Text>
                <Image source={require("../tipos/instucional.jpeg")} style={styles.cardimagen} />
              </TouchableOpacity>    
                
              
              <TouchableOpacity onPress={mediatica} style={styles.card}>      
                <Text style={styles.cardText}>Violencia Mediática</Text>
                <Image source={require("../tipos/mediatica.png")} style={styles.cardimagen} />
              </TouchableOpacity>        
              
              <TouchableOpacity onPress={acoso} style={styles.card}>
                <Text style={styles.cardText}>Acoso</Text>
                <Image source={require("../tipos/acoso.jpeg")} style={styles.cardimagen} />
              </TouchableOpacity>    
              
              
            
            </View>   
        

        
              <View style={styles.cardNoticias}> 
              <Text style={styles.cardText}>Noticias Recientes</Text>
              <Image source={require("../tipos/noticia1.png")} style={styles.cardimagen} />
              <View>
                <Text style={styles.title}>Una mujer denunció que un amigo la acompañó a su casa, la amenazó con un cuchillo y la violó</Text>
                <Text style={styles.newsDescripcion}>
                  Una joven de 20 años denunció que un amigo, tras acompañarla a su casa en la
                  localidad de Oberá, Misiones, la amenazó con un cuchillo, la violó repetidas veces y grabó el ataque con un
                  celular, el domingo a la madrugada. Tras ello el hombre que fue detenido y su casa, allanada en busca de indicios
                </Text>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.lanacion.com.ar/seguridad/misiones-una-mujer-denuncio-que-un-amigo-la-acompano-a-su-casa-la-amenazo-con-un-cuchillo-y-la-violo-nid04102023/')} style={styles.newsLink}>
                  <Text>Ver más información</Text>
                </TouchableOpacity>
              </View>


          
        </View>


        

    
    </View>
  );
}



const styles = StyleSheet.create({

  container:{
    width:300,
    margin: 10,
  },
  
  titulo:{
    fontSize: 24,  // Tamaño de la fuente
    fontWeight: 'bold',  // Negrita
    color: '#333',  // Color del texto
    extAlign: 'center',  // Alineación del texto
    marginTop: 20,  

  },


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
    borderWidth: 2,  // Puedes ajustar el ancho del borde según tus preferencias
   borderColor: 'gray',
   borderRadius: 10, 
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
  
  title: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
  },

  newsDescripcion: {
    textAlign: 'center',
  },

  newsLink:{
    textAlign: 'center',
    color: 'blue',
  },




});


export default CajaTipos;