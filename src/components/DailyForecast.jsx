import { useState, useEffect } from 'react'
import '../styles/main.scss'
import { cToF, kmhToMph, mmToInches } from './utils/unitConversions';

function DailyForecast({precipitation, humidity, windSpeed, feelsLike, units}) { 

    const displayTemp =units === 'F' ? cToF(feelsLike) : feelsLike;
    const tempUnit = units === 'F' ? '°F' : '°C';
    
  return (
    <>
    <h1>Daily Forecast</h1>
      <p>Precipitation: {precipitation}mm</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed}km/h</p>
      <p>Feels like: {Math.round(displayTemp)}{tempUnit}</p>
 
    </>
  )
}

export default DailyForecast