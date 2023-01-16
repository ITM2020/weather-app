import { useState } from "react";

import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [coordinates, setCoordinates] = useState({});

  const [currentForecast, setCurrentForecast] = useState({});
  return (
    <div className="app">
      <header>Weather App</header>
      <SearchBar
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        setCurrentForecast={setCurrentForecast}
      />
      {Object.keys(currentForecast).length === 0
        ? <></>
        : <CurrentWeather currentForecast={currentForecast} />
      }
      <footer>ITM2020 c Github</footer>    
    </div>
  )
}