import React from 'react'
import { ReactDOM } from 'react'
import appFirebase from '../../../firebase/firebase'
import { useHistory } from "react-router-dom"
import { getAuth, signOut } from 'firebase/auth'
import { Link, BrowserRouter as Router } from "react-router-dom"
import Button from "@material-ui/core/Button"
import "../home/home.css"
import Panicbutton from '../panico/Panicbutton'
const auth=getAuth(appFirebase)
const Home = ({correoUsuario}) => {
  const history = useHistory();
  const handleButtonClick = () => {
  };
  return (
    <div>
      <h1>Bienvenido {correoUsuario}  <button className='btn btn-primary' onClick={()=>signOut(auth)}>Cerrar sesion</button></h1>
    <Router path="/assets/src/panico/Panicbutton.jsx" component={Panicbutton}>
    <Link to="/BotonPanico/">
    <button className='boton' />
    </Link>
    </Router>
    </div>
  
  )
}

export default Home
