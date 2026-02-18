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
      <h1>Current Weather</h1>

      <p>
        {Math.round(displayTemp)}
        {tempUnit}
      </p>

      <p>{city}, {country}</p>
      <p>{day}</p>

      <img
        src={weatherCodeMap[weatherCode]}
        alt="Weather icon"
        className="weather-icon"
      />
    </>
  );
}

export default CurrentWeather;