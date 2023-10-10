import React from "react";

function CajaTipos() {
  return (
    <>
      <div className="Vdomestica">
        <i className="bi bi-chevron-left">#</i>
        <h2>Tipos de violencias</h2>
        <div className="card text-bg-dark">
          <img src="..." className="card-img" alt="..." />
          <div className="card-img-overlay">
            <h5 className="card-title">Violencia Domestica</h5>
            <p className="card-text">La violencia no es solo matar a otro</p>
          </div>
        </div>
        <i className="bi bi-chevron-right">#</i>
      </div>

      <div className="VSexual">
        <div className="card text-bg-dark">
          <img src="..." className="imagen2" alt="..." />
          <div className="card-img">
            <h5 className="title2">Violencia Sexual</h5>
          </div>
        </div>
      </div>

      <div className="VLaboral">
        <div className="card text-bg-dark">
          <img src="..." className="imagen3" alt="..." />
          <div className=" card-img3">
            <h5 className="title3">Violencia Laboral</h5>
          </div>
        </div>
      </div>

      <div className="Femicidio">
        <div className="card text-bg-dark">
          <img src="..." className="imagen4" alt="..." />
          <div className="card-img4">
            <h5 className="title4">Femicidio</h5>
          </div>
        </div>
      </div>

      <div className="VInstitucional">
        <div className="card text-bg-dark">
          <img src="..." className="imagen5" alt="..." />
          <div className="card-img5">
            <h5 className="title5">Violencia institucional</h5>
          </div>
        </div>
      </div>

      <div className="VMediatica">
        <div className="card text-bg-dark">
          <img src="..." className="imagen6" alt="..." />
          <div className="card-img6">
            <h5 className="title6">Violencia Mediática</h5>
          </div>
        </div>
      </div>

      <div className="Acoso">
        <div className="card text-bg-dark">
          <img src="..." className="imagen7" alt="..." />
          <div className="card-img7">
            <h5 className="title7">Acoso</h5>
          </div>
        </div>
      </div>

      <div className="VPsicologica">
        <div className="card text-bg-dark">
          <img src="..." className="imagen8" alt="..." />
          <div className="card-img8">
            <h5 className="title8">Violencia Psicológica</h5>
          </div>
        </div>
      </div>

      <div className="VEconomica">
        <div className="card text-bg-dark">
          <img src="..." className="imagen9" alt="..." />
          <div className="card-img9">
            <h5 className="title9">Violencia Economica y Patrimonial</h5>
          </div>
        </div>
      </div>

      <div className="VFisica">
        <div className="card text-bg-dark">
          <img src="..." className="imagen10" alt="..." />
          <div className="card-img10">
            <h5 className="title10">Violencia Física</h5>
          </div>
        </div>
      </div> 

      <h2>Noticias Recientes</h2>

      <div className="">
        <div className="card" style={{ width: '18rem'}}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Una mujer denunció que un amigo la acompañó a su casa, la amenazó con un cuchillo y la violó</h5>
            <p className="card-text">Una joven de 20 años denunció que un amigo, tras acompañarla a su casa en la localidad de Oberá, Misiones, la amenazó con un cuchillo, la violó repetidas veces y grabó el ataque con un celular, el domingo a la madrugada. Tras ello el hombre que fue detenido y su casa, allanada en busca de indicios</p>
            
          </div>
        </div>
      </div>
    </>
  );
}

function Card() {
  return (
    <>
      <h2>Noticias Recientes</h2>
      <div className="card" style={{ width: '18rem' }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Violencia de Genero</h5>
          <p className="card-text">La violencia de género puede ser de tipo sexual, físico, psicológico y económico, y puede darse tanto en el espacio público como en la esfera privada</p>
          <a href="#" className="btn btn-primary">Ver más información</a>
        </div>
      </div>
    </>
  );
}

export default CajaTipos;
