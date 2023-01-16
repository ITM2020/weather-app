import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { getHourlyWeather, getThreeHrWeather, getDailyWeather } from "../services/weather";

function HourlyDisplay({ futureForecast }) {
  const data = futureForecast.list.map((forecast) => {
    return (
      {
        dt: forecast.dt,
        dt_txt: `${forecast.dt_txt}`,
        weather: forecast.weather,
        main: forecast.main,
        pop: forecast.pop,
        wind: forecast.wind,
        rain: forecast.rain || null,
        snow: forecast.snow || null
      }
    )
  })

  console.log(data)

  return (
    <Box>
    </Box>
  )
}

function ThreeHourDisplay() {
  return (
    <></>
  )
}

function DailyDisplay() {
  return (
    <></>
  )
}

export default function FutureWeather({ coordinates, futureForecast, setFutureForecast }) {
  const handleClick = async (event) => {
    // eslint-disable-next-line default-case
    switch (event.target.id) {
      case 'hourly-weather-btn':
        const hourlyWeather = await getHourlyWeather(coordinates.latitude, coordinates.longitude);
        setFutureForecast({ ...futureForecast, hourlyWeather })
        break;
      case '3hr-weather-btn':
        const threeHrWeather = await getThreeHrWeather(coordinates.latitude, coordinates.longitude);
        setFutureForecast({ ...futureForecast, threeHrWeather })
        break;
      case 'daily-weather-btn':
        const dailyWeather = await getDailyWeather(coordinates.latitude, coordinates.longitude);
        setFutureForecast({ ...futureForecast, dailyWeather })
        break;
    }
  }
  
  return (
    <Box>
      <Button id="hourly-weather-btn" onClick={handleClick}>HOURLY</Button>
      <Button id="3hr-weather-btn" onClick={handleClick}>3HR</Button>
      <Button id="daily-weather-btn" onClick={handleClick}>DAILY</Button>
    </Box>
  )
}