import React, { useState } from 'react';
import ProfileCard from './tarjeta';
import CustomizedButtons from './botton_selc';
import { datosFalsos } from './datos';
import CustomAppBar from './header'; 
import Footer from './footer';
import { View, Text } from 'react-native';

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
        <View>
            <CustomAppBar />
            <CustomizedButtons onSelect={(categoria) => setFiltro(categoria)} />
            <Text>Lista de Expertos</Text>
            {expertosFiltrados.map((experto) => (
                <ProfileCard key={experto.id} data={experto} />
            ))}
            <Footer />
        </View>
    );
};

export default Expertos;
