import React, { useState } from 'react';
import ProfileCard from './tarjeta';
import CustomizedButtons from './botton_selc';
import datos from './datos';
import CustomAppBar from './header'; 
import Footer from './footer';
import { ProfileCardProps } from '../home/types';
interface Experto {
    data: ProfileCardProps;
}
const Expertos: React.FC = () => {
    const [expertosData, setExpertosData] = useState(datos);
    const [filtro, setFiltro] = useState<string | null>(null);

    const expertosFiltrados = expertosData.filter((experto:ProfileCardProps) => {
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
            {expertosFiltrados.map((Experto:ProfileCardProps) => (
                <ProfileCard key={Experto.id} {...Experto}  />
            ))}
            <Footer />
        </div>
    );
};

export default Expertos;
