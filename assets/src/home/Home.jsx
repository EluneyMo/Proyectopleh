import React from 'react'
import appFirebase from '../../../firebase/firebase'
import { getAuth, signOut } from 'firebase/auth'
const auth=getAuth(appFirebase)
const Home = ({correoUsuario}) => {
  return (
    <div>
      <Text>Bienvenido {correoUsuario}  <button className='btn btn-primary' onClick={()=>signOut(auth)}>Cerrar sesion</button></Text>
    </div>
  
  )
}

export default Home
