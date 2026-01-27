import { useState, useEffect } from 'react'
import '../styles/main.scss'

function DailyForecast({precipitation, humidity, windSpeed, feelsLike}) { 

  return (
    <>
    <h1>Daily Forecast</h1>
      <p>{precipitation}mm</p>
      <p>{humidity}%</p>
      <p>{windSpeed}km/h</p>
      <p>{feelsLike}°C</p>
 
    </>
  )
}

export default DailyForecast