import '../styles/main.scss';
import logo from '../assets/images/logo.svg';

function Header({
    tempUnit,
    setTempUnit,
    windUnit,
    setWindUnit,
    rainUnit,
    setRainUnit,
    onLogoClick,
    setEuropeanUnits,
    setUSUnits
    }) {
  return (
    <>
      <header id="wrapper-header">
        <img src={logo} alt="Logo" id="logo-image" onClick={onLogoClick}/>
        <div id="dropdown-menu">
          <button className="dropbtn">Units
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" fill="none" viewBox="0 0 13 8"><path fill="#fff" d="M6.309 7.484 1.105 2.316c-.175-.14-.175-.421 0-.597l.704-.668a.405.405 0 0 1 .597 0l4.219 4.148 4.184-4.148c.175-.176.457-.176.597 0l.703.668c.176.176.176.457 0 .597L6.906 7.484a.405.405 0 0 1-.597 0Z"/></svg>
          </button>
          <div className="dropdown-content">
            <label htmlFor="switch-metric">Switch to:</label>
            <div className="unit-toggle-container">
              <button 
                type="button"
                className={tempUnit === 'C' ? 'unit-btn active' : 'unit-btn'} 
                onClick={setEuropeanUnits}
              >
                Metric 
              </button>
              
              <button 
                type="button"
                className={tempUnit === 'F' ? 'unit-btn active' : 'unit-btn'} 
                onClick={setUSUnits}
              >
                Imperial 
              </button>
            </div>
            <label htmlFor="temperature-units">Temperature</label>
            <select
              id="temperature-units"
              value={tempUnit}
              onChange={(e) => setTempUnit(e.target.value)}
            >
              <option value="C">Celsius (°C)</option>
              <option value="F">Fahrenheit (°F)</option>
            </select>
            <label htmlFor="wind-units">Wind speed</label>
            <select
              id="wind-units"
              value={windUnit}
              onChange={(e) => setWindUnit(e.target.value)}
            >
              <option value="kmh">km/h</option>
              <option value="mph">mph</option>
            </select>
            <label htmlFor="rain-units">Precipitation</label>
            <select
              id="rain-units"
              value={rainUnit}
              onChange={(e) => setRainUnit(e.target.value)}
            >
              <option value="mm">mm</option>
              <option value="in">inches</option>
            </select>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
