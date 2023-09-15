import React from 'react'
import appFirebase from '../../../firebase/firebase'
import { getAuth, signOut } from 'firebase/auth'
const auth=getAuth(appFirebase)
const Home = ({correoUsuario}) => {
  return (
    <div>
      <Text>Bienvenido {correoUsuario}</Text>
    </div>
  )
}

export default Home
