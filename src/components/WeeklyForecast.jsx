import { useState, useEffect } from 'react'
import '../styles/main.scss'

function WeeklyForecast({precipitation, humidity, windSpeed, feelsLike}) { 

  return (
    <>
    <h1>Weekly Forecast</h1>
      <p>{precipitation}mm</p>
      <p>{humidity}%</p>
      <p>{windSpeed}km/h</p>
      <p>{feelsLike}°C</p>
 
    </>
  )
}

export default WeeklyForecast