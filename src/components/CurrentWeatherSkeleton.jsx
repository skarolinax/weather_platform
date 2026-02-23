import { useState, useEffect } from 'react'
import '../styles/main.scss'
import loadingIcon from '../assets/images/icon-loading.svg';

function CurrentWeatherSkeleton({}) { 
    return (
        <div id="main-content-wrapper" className="skeleton-card">
            <img src={loadingIcon} alt="Loading icon" className="loading-icon-skeleton" />
            <h3 className="loading-text">Loading...</h3>
        </div>
  );
}

export default CurrentWeatherSkeleton