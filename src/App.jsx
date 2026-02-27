import { useState, useEffect } from 'react'
import './styles/main.scss'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import WeeklyForecast from './components/WeeklyForecast'
import DailyForecast from './components/DailyForecast'
import HourlyForecast from './components/HourlyForecast'
import errorIcon from './assets/images/icon-error.svg';

// Skeletons 
import CurrentWeatherSkeleton from './components/CurrentWeatherSkeleton';
import DailyForecastSkeleton from './components/DailyForecastSkeleton';
import WeeklyForecastSkeleton from './components/WeeklyForecastSkeleton';
import HourlyForecastSkeleton from './components/HourlyForecastSkeleton';

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
  const [apiError, setApiError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState("");

  // Fetch weather data on component mount and pass as prop
    const fetchWeather = async (lat, lon) => {
      setApiError(false);
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&current=apparent_temperature,precipitation,relative_humidity_2m,wind_speed_10m,temperature_2m,weather_code`);

        const data = await response.json();

        setCurrentTemp(data.current.temperature_2m);
        setPrecipitation(data.current.precipitation);
        setHumidity(data.current.relative_humidity_2m);
        setWindSpeed(data.current.wind_speed_10m);
        setFeelsLike(data.current.apparent_temperature);
        setWeatherCode(data.current.weather_code);

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
        setIsLoading(false);

      } catch (error) {
        console.error("Error fetching weather:", error);
        setApiError(true);
        setIsLoading(false);
      }
    };  

    useEffect(() => {
      fetchWeather(52.52, 13.41); //Set default location to Berlin, Germany
      setCity("Berlin");
      setCountry("Germany"); 
    }, []);

  // Fetch weather data based on search input
  const handleSearch = async () => {
    if (!input) {
      setCityNotFound(true);
      return;
    };

    try {
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=10&language=en&format=json`
      );

      const geoData = await geoResponse.json();
      console.log(geoData);

      if (!geoData.results || geoData.results.length === 0) {
        setCityNotFound(true);
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      setCity(name);
      setCountry(country);
      setCityNotFound(false);

      await fetchWeather(latitude, longitude);

    } catch (error) {
      console.error("Error finding search result:", error);
      setCityNotFound(true);
    }
  };
  
  const handleLogoClick = () => {
    setCityNotFound(false);
  };

  //Used for toggling the units in the Header.jsx
  const setEuropeanUnits = () => {
    setTempUnit('C');
    setWindUnit('kmh');
    setRainUnit('mm');
  };

  const setUSUnits = () => {
    setTempUnit('F');
    setWindUnit('mph');
    setRainUnit('in');
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
        setEuropeanUnits={setEuropeanUnits}
        setUSUnits={setUSUnits}
      />

      {apiError ? (
        <div className="not-found-api">
          <img src={errorIcon} alt="Error sign" />
          <h1>Something went wrong</h1>
          <h2>
            Sorry, we're having trouble fetching the weather data (API error).
            Please try again later.
          </h2>
          <button onClick={() => window.location.reload()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none" viewBox="0 0 16 17"><path fill="#fff" d="M15.094 1.406c.25-.25.656-.062.656.25v4.469a.38.38 0 0 1-.375.375h-4.5a.36.36 0 0 1-.25-.625l1.688-1.688A5.992 5.992 0 0 0 8 2.375a6.134 6.134 0 0 0-6.125 5.781c-.031.219-.188.344-.375.344H.625c-.219 0-.406-.156-.375-.375C.438 4.031 3.844.75 8 .75c2.125 0 4.063.875 5.469 2.281l1.625-1.625Zm.25 7.094c.219 0 .406.188.375.406C15.53 13 12.125 16.25 8 16.25c-2.156 0-4.094-.844-5.5-2.25L.875 15.625a.36.36 0 0 1-.625-.25v-4.5a.38.38 0 0 1 .375-.375h4.469c.312 0 .5.406.25.656l-1.688 1.688C4.75 13.969 6.281 14.625 8 14.625a6.1 6.1 0 0 0 6.094-5.75c.031-.219.187-.375.375-.375h.875Z"/></svg>
            Refresh
          </button>
        </div>
      ) : (
        <>
          <div id="wrapper-search-heading">
            <h1>How is the sky looking today?</h1>
            <SearchBar 
              input={input}
              setInput={setInput}
              onSearch={handleSearch} />
          </div>

          {cityNotFound ? (
            <div className="not-found">
              <h2>No search result found.</h2>
            </div>
          ) : (
            <main>
              {isLoading ? (
                <>
                  <div className="wrapper-left">
                    <CurrentWeatherSkeleton />
                    <DailyForecastSkeleton />
                    <WeeklyForecastSkeleton />
                  </div>

                  <div className="wrapper-right">
                    <HourlyForecastSkeleton />
                  </div>
                </>
              ) : (
                <>
                  <div className="wrapper-left">
                    <CurrentWeather
                      currentTemp={currentTemp}
                      city={city}
                      country={country}
                      day={day}
                      weatherCode={weatherCode}
                      units={tempUnit}
                    />
                    <DailyForecast
                      precipitation={precipitation}
                      humidity={humidity}
                      windSpeed={windSpeed}
                      feelsLike={feelsLike}
                      units={{
                        temp: tempUnit,
                        wind: windUnit,
                        rain: rainUnit,
                      }}
                    />
                    <WeeklyForecast
                      weeklyForecast={weeklyForecast}
                      units={tempUnit}
                    />
                  </div>

                  <div className="wrapper-right">
                    <HourlyForecast
                      hourlyForecast={hourlyForecast}
                      units={tempUnit}
                    />
                  </div>
                </>
              )}
            </main>
          )}
        </>
      )}
    </>
  );
}

export default App
