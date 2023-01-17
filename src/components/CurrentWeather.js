import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2"
import Button from "@mui/material/Button";

export default function CurrentWeather({ currentForecast }) {
  return (
    <div>
      <h2>Current Weather</h2>
      <Grid container columns='3' spacing='0'>
        <Grid><p>Feels Like: {currentForecast.main.feels_like}</p></Grid>
        <Grid><p>Temperature: {currentForecast.main.temp}</p></Grid>
        <Grid><p>Pressure: {currentForecast.main.pressure}</p></Grid>
        <Grid><p>Humidity: {currentForecast.main.humidity}</p></Grid>
        <Grid><p>Sunrise: {currentForecast.sys.sunrise}</p></Grid>
        <Grid><p>Sunset: {currentForecast.sys.sunset}</p></Grid>
        <Grid><p>Visibility: {currentForecast.visibility}</p></Grid>
        <Grid><p>Weather: {currentForecast.weather[0].main}, Desc: {currentForecast.weather[0].description}</p></Grid>
        <Grid><p>Wind: {currentForecast.wind.speed}, {currentForecast.wind.deg}degrees</p></Grid>
      </Grid>
    </div>
  )
}