import { useState, useEffect } from 'react'
import '../styles/main.scss'
import { weatherCodeMap } from '../assets/weatherIcons';

function HourlyForecast({hourlyForecast}) { 
    if (!hourlyForecast || !hourlyForecast.time) return null;

  return (
    <>
    <h1>Hourly Forecast</h1>
    {hourlyForecast.time.map((time,index) => {
        const timeStr = new Date(time);
        return (    
            <div key={timeStr}>
                <img 
                    src={weatherCodeMap[hourlyForecast.weather_code[index]]} 
                    alt="Weather icon" 
                    className='weather-icon'

                />
                <p>{timeStr.toLocaleTimeString('en-US', {hour: 'numeric', hour12: true })}</p>
                <p>Temperature: {hourlyForecast.temperature_2m[index]}°C</p>
            </div>
        );
    })}
    </>
  )
}

export default HourlyForecast