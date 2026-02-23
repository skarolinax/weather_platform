import { useState, useEffect } from 'react'
import '../styles/main.scss'

function DailyForecastSkeleton({}) { 
    return (
        <div className="dailyInfo-wrapper">
            <div className="daily-cards">
                <p>Precipitation</p>
                <p>-</p>
            </div>
            <div className="daily-cards">
                <p>Humidity</p>
                <p>-</p>
            </div>
            <div className="daily-cards">
                <p>Wind Speed</p>
                <p>-</p>
            </div>
            <div className="daily-cards">
                <p>Feels like</p>
                <p>-</p>
            </div>
        </div>
    );
}

export default DailyForecastSkeleton