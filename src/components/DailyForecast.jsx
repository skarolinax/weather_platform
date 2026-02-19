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
      <div className="dailyInfo-wrapper">
        <div className="daily-cards">
          <p>Precipitation</p>
          <p>{Math.round(displayPrecip)}{rainUnit}</p>
        </div>
        <div className="daily-cards">
          <p>Humidity</p>
          <p>{humidity}%</p>
        </div>
        <div className="daily-cards">
          <p>Wind Speed</p>
          <p>{Math.round(displayWind)}{windUnit}</p>
        </div>
        <div className="daily-cards">
          <p>Feels like</p>
          <p>{Math.round(displayTemp)}{tempUnit}</p>
        </div>
      </div>
 
    </>
  )
}

export default DailyForecast