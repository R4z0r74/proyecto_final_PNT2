import React from 'react'

const capitalizarPrimeraLetra = (str) => {
  return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
};

const ClimaTarjeta = ({ clima }) => {
    const {name,main,weather} = clima;
  return (
    <div className='clima-tarjeta'>
      <h2>{name}</h2>
      <p>Temperatura: {main.temp}°C</p>
      <p>Condición: {capitalizarPrimeraLetra(weather[0].description)}</p>
      <p>Humedad: {main.humidity}%</p>
    </div>
  )
}

export default ClimaTarjeta