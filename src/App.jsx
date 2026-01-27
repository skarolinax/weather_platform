import { useState, useEffect } from 'react'
import './styles/main.scss'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import WeeklyForecast from './components/WeeklyForecast'

function App() {
  const [currentTemp, setCurrentTemp] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [day, setDay] = useState(null);
  const [precipitation, setPrecipitation] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);

  // Fetch weather data on component mount and pass as prop
   useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,apparent_temperature,precipitation,relativehumidity_2m,windspeed_10m");

        const data = await response.json();

        setCurrentTemp(data.current.temperature_2m);
        setPrecipitation(data.current.precipitation);
        setHumidity(data.current.relativehumidity_2m);
        setWindSpeed(data.current.windspeed_10m);
        setFeelsLike(data.current.apparent_temperature);

        setCity("Berlin");
        setCountry("Germany"); // How to geolocate country from API?

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

  return (
    <>
      <Header />
      <h1>How is the sky looking today?</h1>
      <SearchBar />


      <WeeklyForecast 
        precipitation={precipitation} 
        humidity={humidity} 
        windSpeed={windSpeed} 
        feelsLike={feelsLike} 
      />

      <CurrentWeather 
        currentTemp={currentTemp} 
        city={city} 
        country={country} 
        day={day} 
        />
      
    </>
  )
}

export default App
