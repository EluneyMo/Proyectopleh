import React, { useState } from 'react';
import Tarjeta from './tarjeta';
import CustomizedButtons from './botton_selc';
import { datosFalsos } from './datos';
import AppBar from './header.jsx'; // Reemplazar con la ruta correcta a tu componente AppBar
import Footer from './footer';

const Expertos: React.FC = () => {
    const [expertosData, setExpertosData] = useState(datosFalsos);
    const [filtro, setFiltro] = useState<string | null>(null);

    const expertosFiltrados = expertosData.filter((experto) => {
        if (!filtro) {
            return true;
        }
        return experto.categoria === filtro;
    });

    return (
        <div>
            <AppBar />
            <CustomizedButtons onSelect={(categoria) => setFiltro(categoria)} />
            <h1>Lista de Expertos</h1>
            {expertosFiltrados.map((experto) => (
                <Tarjeta key={experto.id} data={experto} />
            ))}
            <Footer />
        </div>
    );
};

export default Expertos;
