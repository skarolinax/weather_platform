import { useState, useEffect } from 'react'
import '../styles/main.scss'
import { weatherCodeMap } from '../assets/weatherIcons'
import { cToF, kmhToMph, mmToInches } from './utils/unitConversions';

function WeeklyForecast({weeklyForecast, units}) { 
    if (!weeklyForecast || !weeklyForecast.time) return null; // Load all data first
    const tempUnit = units === 'F' ? '°F' : '°C';

  return (
    <>
    <h1>Weekly Forecast</h1>
    <div className="wrapper-weekly">
        {weeklyForecast.time.map((date, index) => {
            const displayTemp1 = units === 'F' ? cToF(weeklyForecast.temperature_2m_max[index]) : weeklyForecast.temperature_2m_max[index];
            const displayTemp2 = units === 'F' ? cToF(weeklyForecast.temperature_2m_min[index]) : weeklyForecast.temperature_2m_min[index];
            const dateStr = new Date(date);
            return (
                <div key={dateStr} className='weekly-card-name'>
                    <p>{dateStr.toLocaleString('en-US', {weekday: 'short'})}</p>
                    <img
                        src={weatherCodeMap[weeklyForecast.weather_code[index]]}
                        alt="Weather icon"
                        className='weather-icon'
                    />
                    <div className="minmax-row">
                        <p>{Math.round(displayTemp1)}{tempUnit}</p>
                        <p>{Math.round(displayTemp2)}{tempUnit}</p>
                    </div>
                    
                </div>
            );
            })}
    </div>

    </>
  )
}

export default WeeklyForecast