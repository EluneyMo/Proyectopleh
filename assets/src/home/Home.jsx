import React from "react";
import appFirebase from "../../../firebase/firebase";
import { getAuth, signOut } from "firebase/auth";
import x from "./../preguntas/Buttonpreguntas.jsx";
import Buttonpreguntas from "./../preguntas/Buttonpreguntas.jsx";
import x from "/proyectopleh/assets/searchpoleh/.searchone.jsx";
const auth = getAuth(appFirebase);
const Home = ({ correoUsuario }) => {
  return (
    <div>
      <h1>PLEH</h1>
      <h1>
        Bienvenido {correoUsuario}{" "}
        <button className="btn btn-primary" onClick={() => signOut(auth)}>
          Cerrar sesion
        </button>
      </h1>
      <Buttonpreguntas></Buttonpreguntas>
    </div>
  );
};

export default Home;
