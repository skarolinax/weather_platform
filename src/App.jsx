import { useState, useEffect } from 'react'
import './styles/main.scss'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import WeeklyForecast from './components/WeeklyForecast'
import DailyForecast from './components/DailyForecast'
import HourlyForecast from './components/HourlyForecast'

function App() {
  const [currentTemp, setCurrentTemp] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [day, setDay] = useState(null);
  const [precipitation, setPrecipitation] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [weeklyForecast, setWeeklyForecast] = useState([]);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [weatherCode, setWeatherCode] = useState(null);
  const [tempUnit, setTempUnit] = useState('C');     
  const [windUnit, setWindUnit] = useState('kmh');  
  const [rainUnit, setRainUnit] = useState('mm');   

  const [cityNotFound, setCityNotFound] = useState(false);

  // Fetch weather data on component mount and pass as prop
   useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=,temperature_2m,weather_code&current=apparent_temperature,precipitation,relative_humidity_2m,wind_speed_10m,temperature_2m,weather_code");

        const data = await response.json();

        setCurrentTemp(data.current.temperature_2m);
        setPrecipitation(data.current.precipitation);
        setHumidity(data.current.relative_humidity_2m);
        setWindSpeed(data.current.wind_speed_10m);
        setFeelsLike(data.current.apparent_temperature);
        setWeatherCode(data.current.weather_code);

        setCity("Berlin");
        setCountry("Germany"); // How to geolocate country from API?

        setHourlyForecast(data.hourly);
        setWeeklyForecast(data.daily);

        const date = new Date(data.current.time);
        const day = date.toLocaleDateString('en-US', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });

        setDay(day);

      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, []); 

  // Letting all searches fail cause I don't want to deal with the API and geolcation right now, but I want to show the error message when search is used
  const handleSearch = (input) => {
     if (input.trim().length < 3 || !input.trim()) {
      setCityNotFound(true);
      return;
    }
    setCityNotFound(true);
  };

  const handleLogoClick = () => {
    setCityNotFound(false);
  };

  return (
    <>
      <Header
        tempUnit={tempUnit}
        setTempUnit={setTempUnit}
        windUnit={windUnit}
        setWindUnit={setWindUnit}
        rainUnit={rainUnit}
        setRainUnit={setRainUnit}
        onLogoClick={handleLogoClick}
      />

      <div id="wrapper-search-heading">
        <h1>How is the sky looking today?</h1>
        <SearchBar onSearch={handleSearch} />
      </div>

      {cityNotFound ? (
        <div className="not-found">
          <h2>No search result found.</h2>
        </div>
      ) : (
        <>
          <DailyForecast   
            precipitation={precipitation} 
            humidity={humidity} 
            windSpeed={windSpeed} 
            feelsLike={feelsLike} 
            units={{ temp: tempUnit, wind: windUnit, rain: rainUnit }}
          />

          <WeeklyForecast 
            weeklyForecast={weeklyForecast} 
            units={tempUnit}
          />

          <HourlyForecast 
            hourlyForecast={hourlyForecast} 
            units={tempUnit}
          />

          <CurrentWeather 
            currentTemp={currentTemp} 
            city={city} 
            country={country} 
            day={day} 
            weatherCode={weatherCode}
            units={tempUnit}
          />
        </>
      )}
    </>
  );
}
export default App
