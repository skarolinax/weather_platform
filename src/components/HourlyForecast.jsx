import { useState, useEffect } from 'react'
import '../styles/main.scss'
import { weatherCodeMap } from '../assets/weatherIcons';
import { cToF, kmhToMph, mmToInches } from './utils/unitConversions';

function HourlyForecast({hourlyForecast, units}) { 
    if (!hourlyForecast || !hourlyForecast.time) return null;
    const currentTime = new Date();
    const tempUnit = units === 'F' ? '°F' : '°C';

  return (
    <>
    <h1>Hourly Forecast</h1>
    {hourlyForecast.time.map((time,index) => ({
        time: new Date(time),
        index,
        displayTemp: units === 'F' ? cToF(hourlyForecast.temperature_2m[index]) : hourlyForecast.temperature_2m[index]
    }))
    .filter(item => item.time >= currentTime)
    .slice(0, 8) // Show only the next 8 hours
    .map(({ time, index, displayTemp }) => (
            <div key={time.toISOString()}>
                
                <img 
                    src={weatherCodeMap[hourlyForecast.weather_code[index]]} 
                    alt="Weather icon" 
                    className='weather-icon'

                />
                <p>{time.toLocaleTimeString('en-US', {hour: 'numeric', hour12: true })}</p>
                <p>Temperature: {Math.round(displayTemp)}{tempUnit}</p>
            </div>
        )
    )}
    </>
  )
}

export default HourlyForecast