import { useState, useEffect } from 'react'
import '../styles/main.scss'
import { weatherCodeMap } from '../assets/weatherIcons';

function HourlyForecast({hourlyForecast}) { 
    if (!hourlyForecast || !hourlyForecast.time) return null;
    const currentTime = new Date();

  return (
    <>
    <h1>Hourly Forecast</h1>
    {hourlyForecast.time.map((time,index) => ({
        time: new Date(time),
        index
    }))
    .filter(item => item.time >= currentTime)
    .slice(0, 8) // Show only the next 8 hours
    .map(({ time, index }) => (
            <div key={time.toISOString()}>
                
                <img 
                    src={weatherCodeMap[hourlyForecast.weather_code[index]]} 
                    alt="Weather icon" 
                    className='weather-icon'

                />
                <p>{time.toLocaleTimeString('en-US', {hour: 'numeric', hour12: true })}</p>
                <p>Temperature: {hourlyForecast.temperature_2m[index]}°C</p>
            </div>
        )
    )}
    </>
  )
}

export default HourlyForecast