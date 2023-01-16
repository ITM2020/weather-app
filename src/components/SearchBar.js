import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { getSuggestions } from "../services/suggestions"
import { getCurrentWeather } from "../services/weather"

export default function SearchBar({ 
  searchResults,
  setSearchResults,
  coordinates,
  setCoordinates,
  setCurrentForecast
}) {
  const handleChange = async (event) => {
    const suggestions = await getSuggestions(event.target.value);
    setSearchResults(suggestions);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleClick = async () => {
    if (Object.keys(coordinates).length !== 0) {
      const data = await getCurrentWeather(coordinates.latitude, coordinates.longitude)
      setCurrentForecast(data)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Autocomplete
        onChange={(event, value) => setCoordinates(value.coordinates)}
        getOptionLabel={(option) => option.label}
        options={searchResults}
        filterOptions={(x) => x /** Disable built-in filtering */}
        renderInput={(params) => <TextField {...params} onChange={handleChange} />}
        renderOption={(props, option) => (
          <Box component="li" {...props} key={option.key}>{option.label}</Box>
        )}
      />
      <Button onClick={handleClick}>Submit</Button>
    </form>
  )
}