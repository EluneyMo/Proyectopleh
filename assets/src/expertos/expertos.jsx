import React from 'react';
import Tarjeta from './tarjeta';
const Expertos = () => {
    const [expertosData, setExpertosData] = useState([]);
    const datosFalsos = [
        {
            id: 1,
            fullName: 'Carla Lopez',
            title: 'Psicólogo',
            location: 'Neuquen, Neuquén ',
        },
      ];
    };


function ExpertosPage() {
  return (
        <div>
            <Tarjeta />
        </div>
  );
}

export default  ExpertosPage ;