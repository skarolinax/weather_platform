import { useState } from 'react'
import '../styles/main.scss'

function CurrentWeather({currentTemp, city, country, day}) {

  return (
    <>
    
      <h1>Current Weather</h1>
      <p>{currentTemp}°C</p>
      <p>{city}, {country}</p>
      <p>{day}</p>
     
    </>
  )
}

export default CurrentWeather