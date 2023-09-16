import React from 'react'
import appFirebase from '../../../firebase/firebase'
import { getAuth, signOut } from 'firebase/auth'
const auth=getAuth(appFirebase)
const Home = ({correoUsuario}) => {
  return (
    <div>
      <h1>Bienvenido {correoUsuario}  <button className='btn btn-primary' onClick={()=>signOut(auth)}>Cerrar sesion</button></h1>
    </div>
  
  )
}

export default Home
