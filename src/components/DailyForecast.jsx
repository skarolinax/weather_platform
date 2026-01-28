import { useState, useEffect } from 'react'
import '../styles/main.scss'

function DailyForecast({precipitation, humidity, windSpeed, feelsLike}) { 

  return (
    <>
    <h1>Daily Forecast</h1>
      <p>Precipitation: {precipitation}mm</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed}km/h</p>
      <p>Feels like: {feelsLike}°C</p>
 
    </>
  )
}

export default DailyForecast