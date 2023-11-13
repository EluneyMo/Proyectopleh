import React from 'react';
import Tarjeta from './tarjeta';
import CustomizedButtons from './botton_selc';
import { datosFalsos } from './datos';
import AppBar from './';
import Footer from './footer';

const Expertos = () => {
    const [expertosData, setExpertosData] = useState(datosFalsos);
    const [filtro, setFiltro] = useState(null);

    const expertosFiltrados = expertosData.filter((experto) => {
        if (!filtro) {
        return true; 
        }
        return experto.categoria === filtro;
    });

    return (
        
        <div>
            <AppBar/>
            <CustomizedButtons  onSelect={(categoria) => setFiltro(categoria)} />
            <h1>Lista de Expertos</h1>
            {expertosData.map((experto) => (
                <tarjeta key={experto.id} data={experto}/>
            ))}
            <Footer/>
        </div>
    );
}

export default  Expertos;