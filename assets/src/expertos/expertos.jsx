import React from 'react';
import Tarjeta from './tarjeta';
import CustomizedButtons from './botton_selc';
import { datosFalsos } from './datos';

const Expertos = () => {
    
    const [expertosData, setExpertosData] = useState([]);
    const [filtro, setFiltro] = useState(null);
   
      setExpertosData(datosFalsos);
    };

   
  const expertosFiltrados = expertosData.filter((experto) => {
    if (!filtro) {
        return true;
      } return experto.categoria === filtro;
  });

function Expertos() {
  return (
        <div>
            <CustomizedButtons  onSelect={(categoria) => setFiltro(categoria)} />
            <h1>Lista de Expertos</h1>
            {expertosData.map((experto) => (
                <tarjeta key={experto.id} data={experto}/>
            ))}
            
        </div>
  );
}

export default  Expertos;