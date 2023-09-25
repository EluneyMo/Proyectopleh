import React , { useState, useEffect } from 'react'
import { ReactDOM } from 'react'
import appFirebase from '../../../firebase/firebase'
import { getAuth, signOut } from 'firebase/auth'
import { Link,  Route} from "react-router-dom"
import {useNavigate, Router} from "react-router-dom"
import Button from "@material-ui/core/Button"
import "../home/home.css"
import Panicbutton from '../panico/Panicbutton.jsx'
const auth=getAuth(appFirebase)
const Home = ({correoUsuario}) => {
const Navigate=useNavigate()
function handlePanic(){
  Navigate("assets/src/panico/Panicbutton.jsx");
}
  return (
    <div>
      <h1>Bienvenido {correoUsuario}  <button className='btn btn-primary' onClick={()=>signOut(auth)}>Cerrar sesion</button></h1>
    
    <button className='boton'onClick={handlePanic}/>
    </div>
  
  )
}

export default Home
