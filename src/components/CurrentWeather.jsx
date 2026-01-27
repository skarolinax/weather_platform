import { useState } from 'react'
import '../styles/main.scss'
import { weatherCodeMap } from '../assets/weatherIcons'

function CurrentWeather({currentTemp, city, country, day, weatherCode}) {

  return (
    <>
    
      <h1>Current Weather</h1>
      <p>{currentTemp}°C</p>
      <p>{city}, {country}</p>
      <p>{day}</p>
       <img 
          src={weatherCodeMap[weatherCode]} 
          alt="Weather icon" 
          className='weather-icon'
      />
     
    </>
  )
}

export default CurrentWeather