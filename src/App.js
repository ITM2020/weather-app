import { useState } from "react";

import Background from './assets/clear_day.jpg'

import SearchBar from "./components/SearchBar";

import CurrentWeather from "./components/CurrentWeather";
import FutureWeather from "./components/FutureWeather";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [coordinates, setCoordinates] = useState({});

  const [currentForecast, setCurrentForecast] = useState({});
  const [futureForecast, setFutureForecast] = useState({});

  return (
    <Box
      component="div"
      className="App"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch'
      }}>      
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
      
      <Box component="footer" textAlign="center">ITM2020 c Github</Box>    
    </Box>
  )
}