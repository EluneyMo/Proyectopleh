import React from "react";
import appFirebase from "../../../firebase/firebase";
import { getAuth, signOut } from "firebase/auth";
import x from "./../preguntas/Buttonpreguntas.jsx";
import Buttonpreguntas from "./../preguntas/Buttonpreguntas.jsx";
import x from "/proyectopleh/assets/searchpoleh/.searchone.jsx";
const Home = ({ correoUsuario }) => {
  const Navigate = useNavigate();
  function handlePanic() {
    Navigate("assets/src/panico/Panicbutton.jsx");
  }
  return (
    <div>
      <searchone></searchone>
      <h1>
        Bienvenido {correoUsuario}{" "}
        <button className="btn btn-primary" onClick={() => signOut(auth)}>
          Cerrar sesion
        </button>
      </h1>

      <button className="boton" onClick={handlePanic} />
    </div>
  );
};
