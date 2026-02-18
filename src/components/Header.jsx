import '../styles/main.scss';
import logo from '../assets/images/logo.svg';

function Header({
    tempUnit,
    setTempUnit,
    windUnit,
    setWindUnit,
    rainUnit,
    setRainUnit
    }) {
  return (
    <>
      <img src={logo} alt="Logo" />

      <div id="dropdown-menu">
        <button className="dropbtn">Units</button>

        <div className="dropdown-content">
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
    </>
  );
}

export default Header;
