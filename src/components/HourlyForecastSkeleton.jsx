import { useState, useEffect } from 'react'
import '../styles/main.scss'

function HourlyForecastSkeleton({}) { 
    return (
    <aside className="hourly-wrapper">
        <h1>Hourly Forecast</h1>
            {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className='hourly-card-name'></div>
            ))}
             
    </aside>
  );
}

export default HourlyForecastSkeleton