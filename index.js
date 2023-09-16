import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Panicbutton from "./assets/src/panico/Panicbutton";
import Home from "./assets/src/home/Home";
function Main(){
    return(
        <Router> 
            <Route path="/App.tsx" Component={App} />
            <Route path="/assets/src/home" Component={Home}/>
            <Route path="/assets/src/Panicbutton.jsx" Component={Panicbutton} />
        </Router>
    );
}
ReactDOM.render(<Main />, document.getElementById('root'));