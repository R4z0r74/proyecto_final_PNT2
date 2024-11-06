import React from 'react'
import './ClimaTarjeta.css'
import { capitalizarPrimeraLetra } from '../../FuncionesGlobales.js';

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