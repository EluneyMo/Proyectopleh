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
            Login:'login',
            Registro:'registro',
        },
    },
};
function Navigation(){
    return(
        
    )
}