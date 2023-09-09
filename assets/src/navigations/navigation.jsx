import React from "react";
import { NavigationContainer, Link } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import Login from "../login/login";
import Registro from "../registro/register";
 
const Stack= createStackNavigator()

const linking ={
    prefixes:['PLEH://'],
    config:{
        screens: {
            Login:'Login',
            Registro:'Registro',
        },
    },
};
function Navegacion(){
    return(
        
        <NavigationContainer linking={linking}>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}></Stack.Screen>
                <Stack.Screen name="Registro" component={Registro}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}
export default Navegacion;