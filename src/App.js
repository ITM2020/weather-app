import { useEffect, useState } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function CurrentWeather({ currentForecast }) {
  return (
    <div>
      <p>Feels Like: {currentForecast.main.feels_like}</p>
      <p>Temperature: {currentForecast.main.temp}</p>
      <p>Weather: {currentForecast.weather[0].main}, Desc: {currentForecast.weather[0].description}</p>
      <p>Wind: {currentForecast.wind.speed}, {currentForecast.wind.speed}degrees</p>
    </div>
  )
}

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [coordinates, setCoordinates] = useState({});

  const [currentForecast, setCurrentForecast] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState({});
  const [threeHrForecast, setThreeHrForecast] = useState({});
  const [dailyForecast, setDailyForecast] = useState({});

  const getWeather = async (latitude, longitude) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_OW_DEV}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OW_KEY}`);
      const data = await response.json();
      console.log(data)
      setCurrentForecast(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = async (event) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_GEO_URL}&apiKey=${process.env.REACT_APP_GEO_KEY}&format=json&type=city&text=${encodeURI(event.target.value)}`);
      const data = await response.json();
      const options = data.results.map((result) => {
        return (
          {
            label: `${result.city}, ${result.state}, ${result.country}`,
            coordinates: {
              latitude: result.lat,
              longitude: result.lon
            }
          }
        );
      });
      setSearchResults(options);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleClick = () => {
    getWeather(coordinates.latitude, coordinates.longitude)
  }

  return (
    <div className="app">
      <header>Weather App</header>
      <form onSubmit={handleSubmit}>
        <Autocomplete
          onChange={(event, value) => setCoordinates(value.coordinates)}
          options={searchResults}
          filterOptions={(x) => x /** Disable built-in filtering */}
          renderInput={(params) => <TextField {...params} onChange={handleChange} />}  
        />
        <Button onClick={handleClick}>Hello</Button>
      </form>
      {Object.keys(currentForecast).length === 0
        ? <></>
        : <CurrentWeather currentForecast={currentForecast} />
      }
      <footer>ITM2020 c Github</footer>    
    </div>
  )
}