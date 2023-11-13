import React, { useState } from 'react';
import ProfileCard from './tarjeta';
import CustomizedButtons from './botton_selc';
import { datosFalsos } from './datos';
import CustomAppBar from './header'; 
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
            <CustomAppBar />
            <CustomizedButtons onSelect={(categoria) => setFiltro(categoria)} />
            <h1>Lista de Expertos</h1>
            {expertosFiltrados.map((experto) => (
                <ProfileCard key={experto.id} data={experto} />
            ))}
            <Footer />
        </div>
    );
};

export default Expertos;
