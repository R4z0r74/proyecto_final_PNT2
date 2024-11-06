import React from 'react'

const agruparPorDias = (lista) => {
  return lista.reduce((acumulador, entry) => {
      const fecha = new Date(entry.dt_txt).toLocaleDateString('es-ES');
      if (!acumulador[fecha]) {
        acumulador[fecha] = [];
      }
      acumulador[fecha].push(entry);
      return acumulador;
  }, {});
};

const capitalizarPrimeraLetra = (str) => {
  return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
};

const Pronostico = ({ pronostico }) => {
  const pronosticoAgrupado = agruparPorDias(pronostico.list);

  return (
    <div className="clima-detalle"> 
        <h3>Pronóstico de los próximos días</h3>
        <div className="pronostico-carousel">
          {Object.keys(pronosticoAgrupado).map((dia, index) => (
            <div className="pronostico-dia-tarjeta" key={index}>
              <h4>{dia}</h4>
              <div className="pronostico-entradas">
                {pronosticoAgrupado[dia].map((entry, i) => (
                  <div className="pronostico-dia" key={i}>
                    <p><strong>Hora:</strong> {new Date(entry.dt_txt).toLocaleTimeString('es-ES', { hour: '2-digit', minute:'2-digit' })}</p>
                    <p><strong>Temperatura:</strong> {entry.main.temp} °C</p>
                    <p><strong>Descripción:</strong> {capitalizarPrimeraLetra(entry.weather[0].description)}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Pronostico;
