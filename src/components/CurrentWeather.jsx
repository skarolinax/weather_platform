import { useState } from 'react'
import '../styles/main.scss'
import { weatherCodeMap } from '../assets/weatherIcons'
import { cToF, kmhToMph, mmToInches } from './utils/unitConversions';

function CurrentWeather({
  currentTemp,
  city,
  country,
  day,
  weatherCode,
  units
}) {
  const displayTemp = units === 'F' ? cToF(currentTemp) : currentTemp;
  const tempUnit = units === 'F' ? '°F' : '°C';

  return (
    <>

      <div id="main-content-wrapper">
        
        <div className="wrapper-date">
          <p>{city}, {country}</p>
          <p>{day}</p>
        </div>
        
        <div className="temp-wrapper">
          <img
            src={weatherCodeMap[weatherCode]}
            alt="Weather icon"
            className="weather-icon"
          />
          <p>
            {Math.round(displayTemp)}
            {tempUnit}
          </p>
        </div>
        
      </div>

    </>
  );
}

export default CurrentWeather;