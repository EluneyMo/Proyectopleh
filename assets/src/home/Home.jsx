import React , { useState, useEffect } from 'react'
import { ReactDOM } from 'react'
import App from '../../../App'
import appFirebase from '../../../firebase/firebase'
import { getAuth, signOut } from 'firebase/auth'
import {Link, Router} from "react-router-dom"
import Button from "@material-ui/core/Button"
import "../home/home.css"
import Panicbutton from '../panico/Panicbutton.jsx'
const auth=getAuth(appFirebase)
const Home = ({correoUsuario}) => {
  return (
    <div>
      <h1>Bienvenido {correoUsuario}  <button className='btn btn-primary' onClick={()=>signOut(auth)}>Cerrar sesion</button></h1>
    {/* <Link to="/boton-panico" className='boton'></Link>
     */}
     <button href="../panico/Panicbutton.jsx">Boton de panico</button>
    </div>
  
  )
}

export default Home
