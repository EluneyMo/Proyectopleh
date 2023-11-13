import React from 'react';
import Tarjeta from './tarjeta';
import CustomizedButtons from './botton_selc';

const Expertos = () => {
    const [expertosData, setExpertosData] = useState([]);
    const datosFalsos = [
        {
            id: 1,
            fullName: 'Carla Lopez',
            title: 'Psicólogo',
            location: 'Neuquen, Neuquén ',
            phoneNumber: '+5429922567',
            additionalInfo: 'Trabaja de lunes a viernes de 8am a 3pm solo acepta pacientes con turno. ',
        },
      ];
      setExpertosData(datosFalsos);
    };

   
  const expertosFiltrados = expertosData.filter((experto) => {
    if (!filtro) {
        return true;
      } return
  });

function Expertos() {
  return (
        <div>
            <CustomizedButtons  />
            <h1>Lista de Expertos</h1>
            {expertosData.map((experto) => (
                <tarjeta key={experto.id} data={experto}/>
            ))}
            
        </div>
  );
}

export default  Expertos;