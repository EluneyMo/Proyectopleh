import React from "react";
import * as firebase from "../../../node_modules/firebase/app"
import "../../../node_modules/firebase/auth"

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
                />
            </div>
        </form>
    )

}
export default Login;