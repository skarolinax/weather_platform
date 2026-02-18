import { useState, useEffect } from 'react'
import '../styles/main.scss'
import { cToF, kmhToMph, mmToInches } from './utils/unitConversions';

function DailyForecast({precipitation, humidity, windSpeed, feelsLike, units}) { 

    const displayTemp = units.temp === 'F' ? cToF(feelsLike) : feelsLike;
    const displayWind = units.wind === 'mph' ? kmhToMph(windSpeed) : windSpeed;
    const displayPrecip = units.rain === 'in' ? mmToInches(precipitation) : precipitation;

    const tempUnit = units.temp === 'F' ? '°F' : '°C';
    const windUnit = units.wind === 'mph' ? 'mph' : 'km/h';
    const rainUnit = units.rain === 'in' ? 'in' : 'mm';
    
  return (
    <>
    <h1>Daily Forecast</h1>
      <p>Precipitation: {Math.round(displayPrecip)}{rainUnit}</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {Math.round(displayWind)}{windUnit}</p>
      <p>Feels like: {Math.round(displayTemp)}{tempUnit}</p>
 
    </>
  )
}

export default DailyForecast