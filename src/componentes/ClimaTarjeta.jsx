import React from 'react'

const ClimaTarjeta = ({ clima }) => {
    const {name,main,wind,weather} = clima;
  return (
    <div>
          <h2>Clima en {name}</h2>
          <p><strong>Descripción:</strong> {weather[0].description}</p>
          <p><strong>Temperatura:</strong> {main.temp} °C</p>
          <p><strong>Humedad:</strong> {main.humidity}%</p>
          <p><strong>Viento:</strong> {wind.speed} m/s</p>
    </div>
  )
}

export default ClimaTarjeta