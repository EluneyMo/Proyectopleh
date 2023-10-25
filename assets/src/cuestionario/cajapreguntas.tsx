import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { RootStackParamList } from "../home/types";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
interface PreguntasProps{
  route: RouteProp<RootStackParamList,"Preguntas" >
  navigation: StackNavigationProp <RootStackParamList, "Preguntas">
}
const CajaTipos:React.FC<PreguntasProps>=({route,navigation}) =>{
  const movete =()=>{
    navigation.navigate("Tipos")
  }
  return (
    <View>
      <View style= {{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text>#</Text>
        <Text>Tipos de violencias</Text>
        <Text>#</Text>
      </View>
    <TouchableOpacity onPress={movete} style={{ backgroundColor: "#fff", width:400,}}>
      
       
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#555", fontSize: 18 }}>Violencia Domestica</Text>
          <Text style={{ color: "#999" }}>La violencia no es solo matar a otro</Text>
          <Image 
          source={require("../tipos/Domestica.jpg")}
          style={{ width: 200, height: 200 }}/>
        </View>
      </TouchableOpacity>
       <View style={{ backgroundColor: "#fff", width:400,}}>
       
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#555", fontSize: 18 }}>Violencia Sexual </Text>
          <Image 
          source={require("../tipos/images.jpeg")}
          style={{ width: 200, height: 200 }}/>
        </View>
      </View>

      <View style={{ backgroundColor: "#fff", width:400,}}>
       
       <View style={{ alignItems: "center" }}>
         <Text style={{ color: "#555", fontSize: 18 }}>Violencia Laboral</Text>
         <Image 
         source={require("../tipos/laboral.jpeg")}
         style={{ width: 200, height: 200 }}/>
       </View>
     </View>

     <View style={{ backgroundColor: "#fff", width:400,}}>
       
       <View style={{ alignItems: "center" }}>
         <Text style={{ color: "#555", fontSize: 18 }}>Femicidio</Text>
         <Image 
         source={require("../tipos/femicidios.jpg")}
         style={{ width: 200, height: 200 }}/>
       </View>
     </View>

     <View style={{ backgroundColor: "#fff", width:400,}}>
       
       <View style={{ alignItems: "center" }}>
         <Text style={{ color: "#555", fontSize: 18 }}>Violencia Institucional</Text>
         <Image 
         source={require("../tipos/institucional.jpeg")}
         style={{ width: 200, height: 200 }}/>
       </View>
     </View>

     <View style={{ backgroundColor: "#fff", width:400,}}>
       
       <View style={{ alignItems: "center" }}>
         <Text style={{ color: "#555", fontSize: 18 }}>Violencia Mediática</Text>
         <Image 
         source={require("")}
         style={{ width: 200, height: 200 }}/>
       </View>
     </View>

     <View style={{ backgroundColor: "#fff", width:400,}}>
       
       <View style={{ alignItems: "center" }}>
         <Text style={{ color: "#555", fontSize: 18 }}>Acoso</Text>
         <Image 
         source={require("")}
         style={{ width: 200, height: 200 }}/>
       </View>
     </View>

     <View style={{ backgroundColor: "#fff", width:400,}}>
       
       <View style={{ alignItems: "center" }}>
         <Text style={{ color: "#555", fontSize: 18 }}>Violencia Psicologica</Text>
         <Image 
         source={require("")}
         style={{ width: 200, height: 200 }}/>
       </View>
     </View>

     <View style={{ backgroundColor: "#fff", width:400,}}>
       
       <View style={{ alignItems: "center" }}>
         <Text style={{ color: "#555", fontSize: 18 }}>Violencia Economica y Patrimonial</Text>
         <Image 
         source={require("")}
         style={{ width: 200, height: 200 }}/>
       </View>
     </View>

     <View style={{ backgroundColor: "#fff", width:400,}}>
       
       <View style={{ alignItems: "center" }}>
         <Text style={{ color: "#555", fontSize: 18 }}>Violencia Física</Text>
         <Image 
         source={require("")}
         style={{ width: 200, height: 200 }}/>
       </View>
     </View>



      {/* Repite la estructura anterior para otros tipos de violencia */}

      

      
      
      <Text>Noticias Recientes</Text>


      
        <Image
          source={require("../tipos/noticia1.png")}
          style={{ width: 200, height: 200 }}
        />
        <View>
          <Text>Una mujer denunció que un amigo la acompañó a su casa, la amenazó con un cuchillo y la violó</Text>
          <Text>
            Una joven de 20 años denunció que un amigo, tras acompañarla a su casa en la
            localidad de Oberá, Misiones, la amenazó con un cuchillo, la violó repetidas veces y grabó el ataque con un
            celular, el domingo a la madrugada. Tras ello el hombre que fue detenido y su casa, allanada en busca de indicios
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL("https://www.lanacion.com.ar/seguridad/misiones-una-mujer-denuncio-que-un-amigo-la-acompano-a-su-casa-la-amenazo-con-un-cuchillo-y-la-violo-nid04102023/")}>
            <Text>Ver más información</Text>
          </TouchableOpacity>
        </View>

      <View>
         
      </View>

    </View>
  );
}

export default CajaTipos;
