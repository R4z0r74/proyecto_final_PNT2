import { useState } from 'react'
import './App.css'
import { getWeatherByCity } from './api'

function App() {
  const [clima, setClima] = useState(null);
  const [city, setCity] = useState('')
  
  const getWeather = async(cityName) => {
    try{
      const response = await getWeatherByCity(cityName);
      setClima(response);
    } catch(e){
      console.log(e)
    }
    
  }
  //Evento del form
  const handleSubmit = (event) => {
    event.preventDefault(); //Para que no recarge la pagina
    getWeather(city); 
  };
  

  return (
    <>
      <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa el nombre de la ciudad"
          value={city}
          //Evento del formulario
          onChange={(e) => setCity(e.target.value)} 
          
        />
        <button type="submit">Obtener Clima</button>
      </form>

      {clima && (
        <div>
          <h2>Clima en {clima.name}</h2>
          <p><strong>Descripción:</strong> {clima.weather[0].description}</p>
          <p><strong>Temperatura:</strong> {clima.main.temp} °C</p>
          <p><strong>Humedad:</strong> {clima.main.humidity}%</p>
          <p><strong>Viento:</strong> {clima.wind.speed} m/s</p>
        </div>
      )}
    </div>
    </>
  )
}

export default App
