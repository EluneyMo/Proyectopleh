import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter as Router, Route, redirect, Switch  } from "react-router-dom";
import App from "./App";
import Panicbutton from "./assets/src/panico/Panicbutton";
import Home from "./assets/src/home/Home";
function Main(){
    return(
        <Router> 
            <Route path="/PLEH" Component={App} />
            <Route path="/Home" Component={Home}/>
            <Route path="/Boton de panico" Component={Panicbutton} />
        </Router>
    );
}
ReactDOM.render(<Main />, document.getElementById('root'));