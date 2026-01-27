import { useState, useEffect } from 'react'
import './styles/main.scss'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'

function App() {
  const [currentTemp, setCurrentTemp] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [day, setDay] = useState(null);

  // Fetch weather data on component mount and pass as prop
   useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true" // Berlin Germany
        );

        const data = await response.json();

        setCurrentTemp(data.current_weather.temperature);
        setCity("Berlin");
        setCountry("Germany"); // How to geolocate country from API?

        const date = new Date(data.current_weather.time);
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
