import React from 'react'
import { ReactDOM } from 'react'
import appFirebase from '../../../firebase/firebase'
import { getAuth, signOut } from 'firebase/auth'
import { Link, redirect, BrowserRouter as Router } from "react-router-dom"
import Button from "@material-ui/core/Button"
import "../home/home.css"
import Panicbutton from '../panico/Panicbutton'
const auth=getAuth(appFirebase)
const Home = ({correoUsuario}) => {

  const [redirigir, setRedirigir] = useState(false);
  const manejarClick = () => {
    setRedirigir(true);
  };
  if (redirigir) {
    return <redirect to="/assets/src/panico/Panicbutton.jsx" />
  }
  return (
    <div>
      <h1>Bienvenido {correoUsuario}  <button className='btn btn-primary' onClick={()=>signOut(auth)}>Cerrar sesion</button></h1>
    <Router path="/Boton de panico" >
    <button className='boton'onClick={manejarClick} />
    </Router>
    </div>
  
  )
}

export default Home
