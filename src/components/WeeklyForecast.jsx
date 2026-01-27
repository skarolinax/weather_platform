import { useState, useEffect } from 'react'
import '../styles/main.scss'

function WeeklyForecast({weeklyForecast}) { 
    if (!weeklyForecast || !weeklyForecast.time) return null; // Load all data first

  return (
    <>
    <h1>Weekly Forecast</h1>
    {weeklyForecast.time.map((date, index) => {
        const dateStr = new Date(date);
        return (    
            <div key={dateStr}>
                <p>{dateStr.toLocaleString('en-US', {weekday: 'short'})}</p>
                <p>Max: {weeklyForecast.temperature_2m_max[index]}°C</p>
                <p>Min: {weeklyForecast.temperature_2m_min[index]}°C</p>
                <p>Weather code: {weeklyForecast.weather_code[index]}</p>
            </div>
        );
        })};

    </>
  )
}

export default WeeklyForecast