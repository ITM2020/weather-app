import { useState } from "react";

import Background from './assets/clear_day.jpg'

import SearchBar from "./components/SearchBar";

import CurrentWeather from "./components/CurrentWeather";
import FutureWeather from "./components/FutureWeather";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [coordinates, setCoordinates] = useState({});

  const [currentForecast, setCurrentForecast] = useState({});
  const [futureForecast, setFutureForecast] = useState({});

  return (
    <Container className="app">
      
      <Typography>Weather App</Typography>
      <SearchBar
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        setCurrentForecast={setCurrentForecast}
        setFutureForecast={setFutureForecast}
      />
      
      {Object.keys(currentForecast).length === 0
        ? <></>
        : <>
          <CurrentWeather currentForecast={currentForecast} />
          <FutureWeather
            coordinates={coordinates}
            futureForecast={futureForecast}
            setFutureForecast={setFutureForecast} />
          </>
      }

      <Box>ITM2020 c Github</Box>    
    </Container>
  )
}