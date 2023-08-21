import React from "react";
import { initializeApp } from 'firebase/app';
import { auth } from "../../../firebase/firebase";


function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log("Usuario autenticado");
        } catch (error){
            console.error("Error al iniciar sesión:", error.message);
        }
    };
    return(
        <form onSubmit={handleLogin}>
            <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="Email"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                    Tu información no será compartida con nadie.
                </div>
            </div>
            <div className="mb-3">
            <label htmlFor="contra" className="form-label">
                Contraseña
            </label>
            <input 
            type="password" 
            className="form-control"
            id="contra"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div className="mb-3-check">
            <input type="checkbox" className="form-check-input" id="check" />
            <label className="checklabel" htmlFor="check">
                Recuerdame
            </label>
            </div>
            <button type="submit" className="btn">
                Enviar
            </button>
        </form>
    )

}
export default Login;