import React , { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import appFirebase from '../../../firebase/firebase'
import { getAuth, signOut } from 'firebase/auth'
import "../home/home.css"
import Panicbutton from '../panico/Panicbutton';

const auth = getAuth(appFirebase);

const Home = ({correoUsuario}) => {
  function handleclick(){
    
  }
  return (
    <div>
      <h1>Bienvenido {correoUsuario}  <button className='btn btn-primary' onClick={()=>signOut(auth)}>Cerrar sesion</button></h1>
      <Link to='/botonpanico' className='boton'></Link>

    </div>
  )
}

export default Home
