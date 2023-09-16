import React from 'react'
import appFirebase from '../../../firebase/firebase'
import { getAuth, signOut } from 'firebase/auth'
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import "../home/home.css"
const auth=getAuth(appFirebase)
const Home = ({correoUsuario}) => {
  return (
    <div>
      <h1>Bienvenido {correoUsuario}  <button className='btn btn-primary' onClick={()=>signOut(auth)}>Cerrar sesion</button></h1>
    <Link to="/Panicbutton.jsx">
    <button className='boton'/>
    </Link>
    </div>
  
  )
}

export default Home
