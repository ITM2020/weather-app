export default function CurrentWeather({ currentForecast }) {
  return (
    <div>
      <h2>Current Weather</h2>
      <p>Feels Like: {currentForecast.main.feels_like}</p>
      <p>Temperature: {currentForecast.main.temp}</p>
      <p>Pressure: {currentForecast.main.pressure}</p>
      <p>Humidity: {currentForecast.main.humidity}</p>
      <p>Sunrise: {currentForecast.sys.sunrise}</p>
      <p>Sunset: {currentForecast.sys.sunset}</p>
      <p>Visibility: {currentForecast.visibility}</p>
      <p>Weather: {currentForecast.weather[0].main}, Desc: {currentForecast.weather[0].description}</p>
      <p>Wind: {currentForecast.wind.speed}, {currentForecast.wind.deg}degrees</p>
    </div>
  )
}