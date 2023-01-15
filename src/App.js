import { useEffect, useState } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [coordinates, setCoordinates] = useState({});

  const handleChange = async (event) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_GEO_API_URL}&apiKey=${process.env.REACT_APP_GEO_API_KEY}&format=json&type=city&text=${encodeURI(event.target.value)}`);
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

  return (
    <div className="app">
      <div>

      </div>
      <Autocomplete 
        options={searchResults}
        filterOptions={(x) => x /** Disable built-in filtering */}
        renderInput={(params) => <TextField {...params} onChange={handleChange} />}  
      />
    </div>
  )
}