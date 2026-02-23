import { useState, useEffect } from 'react'
import '../styles/main.scss'

function WeeklyForecastSkeleton({}) { 
    return (
    <>
    <h1>Weekly Forecast</h1>
        <div className="wrapper-weekly">
            {Array.from({ length: 7 }).map((_, index) => (
                <div key={index} className='weekly-card-name'></div>
            ))}
        </div>
    </>
  );
}

export default WeeklyForecastSkeleton