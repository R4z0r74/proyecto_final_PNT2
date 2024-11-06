import { useState } from 'react'

import { getForecastByCity, getWeatherByCity } from './api'
import ClimaTarjeta from './componentes/ClimaTarjeta';
import Pronostico from './componentes/Pronostico';

function App() {
  const [clima, setClima] = useState(null);
  const [city, setCity] = useState('');
  const [pronostico, setPronostico] = useState(null);
  const [error, setError] = useState("");
  
  
  //Evento del form
  const handleSubmit = async (event) => {
    try {
      event.preventDefault(); //Para que no recarge la pagina

      const nombreCiudad = document.getElementById("nombreCiudad");
      nombreCiudad.value = ""; //Borramos el input

      const response = await getWeatherByCity(city);
      setClima(response);

      const pronostico = await getForecastByCity(city);
      setPronostico(pronostico);

      setError("");
    } catch (error) {
      setError("Ciudad no encontrada");
      setClima(null);
      setPronostico(null);
    }
  };

  return (
    <div className="app">
      <h1>Aplicación del Clima</h1>
      <form onSubmit={handleSubmit} className='clima-busqueda'>
        <input
          id='nombreCiudad'
          type="text"
          placeholder="Ingrese el nombre de la ciudad"
          //Evento del formulario
          onChange={(e) => setCity(e.target.value)} 
        />
        <button type="submit">Buscar</button>
      </form>
    
      {error && <p style={{color : "red"}} >{error}</p>}
      {clima && <ClimaTarjeta clima = {clima}/>}
      {pronostico && <Pronostico pronostico = {pronostico}/>}
    
    </div>
  )
}

export default App
