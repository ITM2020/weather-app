import { useState } from 'react'

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Stack from "@mui/material/Stack";

import { getHourlyWeather, getThreeHrWeather, getDailyWeather } from "../services/weather";

function HourlyDisplay({ futureForecast }) {
  const hourlyData = futureForecast.hourlyWeather.list.map(forecast => (
    {
      unixDate: forecast.dt,
      main: forecast.weather[0].main,
      desc: forecast.weather[0].description,
      icon: forecast.weather[0].icon,
      id: forecast.weather[0].id,
      temp: forecast.main.temp,
      feels_like: forecast.main.feels_like,
      pop: forecast.pop,
      rain: "-" || forecast?.rain['1h'],
      snow: "-" || forecast?.snow['1h']
    }
  ));

  return (
    <Box component="div" className="future-forecast-display">
      <Box component="div" sx={{ display: "flex", flexDirection: "row" }}>
        {hourlyData.map((interval) => {
          return (
              <Stack key={interval.unixDate}>
                  <p>Day: {interval.unixDate}</p>
                  <p>Time: {interval.unixDate}</p>
                  <p>Main: {interval.main}, Desc: {interval.desc}</p>
                  <p>Icon: {interval.icon}</p>
                  <p>Id: {interval.id}</p>
                  <p>Temp: {interval.temp}</p>
                  <p>Feels Like: {interval.feels_like}</p>
                  <p>POP: {interval.pop}%</p>
                  <p>Rain: {interval.rain}</p>
                  <p>Snow: {interval.snow}</p>
              </Stack>
          );
        })}
      </Box>
    </Box>
  )
}

function ThreeHourDisplay({ futureForecast }) {
  const threeHrData = futureForecast.threeHrWeather.list.map(forecast => (
    {
      unixDate: forecast.dt,
      main: forecast.weather[0].main,
      desc: forecast.weather[0].description,
      icon: forecast.weather[0].icon,
      id: forecast.weather[0].id,
      temp: forecast.main.temp,
      feels_like: forecast.main.feels_like,
      pop: forecast.pop,
      rain: "-" || forecast?.rain['1h'],
      snow: "-" || forecast?.snow['1h']
    }
  ));

  return (
    <Box component="div" className="future-forecast-display">
      <Box component="div" sx={{ display: "flex", flexDirection: "row" }}>
        {threeHrData.map((interval) => {
          return (
              <Stack key={interval.unixDate}>
                  <p>Day: {interval.unixDate}</p>
                  <p>Time: {interval.unixDate}</p>
                  <p>Main: {interval.main}, Desc: {interval.desc}</p>
                  <p>Icon: {interval.icon}</p>
                  <p>Id: {interval.id}</p>
                  <p>Temp: {interval.temp}</p>
                  <p>Feels Like: {interval.feels_like}</p>
                  <p>POP: {interval.pop}%</p>
                  <p>Rain: {interval.rain}</p>
                  <p>Snow: {interval.snow}</p>
              </Stack>
          );
        })}
      </Box>
    </Box>
  )
}

function DailyDisplay({ futureForecast }) {
  const dailyData = futureForecast.dailyWeather.list.map(forecast => (
    {
      unixDate: forecast.dt,
      main: forecast.weather[0].main,
      desc: forecast.weather[0].description,
      icon: forecast.weather[0].icon,
      id: forecast.weather[0].id,
      temp: forecast.temp.day,
      feels_like: forecast.feels_like.day,
      nightTemp: forecast.temp.night,
      pop: forecast.pop,
      windSpeed: forecast.speed,
      windAng: forecast.deg,
      windGust: forecast.gust,
      rain: "-" || forecast.rain,
      snow: "-" || forecast.snow
    }
  ))

  return (
    <Box component="div" className="future-forecast-display">
      <Box component="div" sx={{ display: "flex", flexDirection: "row" }}>
        {dailyData.map((interval) => {
          return (
              <Stack key={interval.unixDate}>
                  <p>Day: {interval.unixDate}</p>
                  <p>Date: {interval.unixDate}</p>
                  <p>Main: {interval.main}, Desc: {interval.desc}</p>
                  <p>Icon: {interval.icon}</p>
                  <p>Id: {interval.id}</p>
                  <p>Temp: {interval.temp}</p>
                  <p>Feels Like: {interval.feels_like}</p>
                  <p>Night: {interval.nightTemp}</p>
                  <p>POP: {interval.pop}%</p>
                  <p>Wind: {interval.windSpeed} {interval.windAng}</p>
                  <p>Wing Gust: {interval.wingGust}</p>
                  <p>Rain: {interval.rain}</p>
                  <p>Snow: {interval.snow}</p>
              </Stack>
          );
        })}
      </Box>
    </Box>
  )
}

export default function FutureWeather({ coordinates, futureForecast, setFutureForecast }) {
  const [activeDisplay, setActiveDisplay] = useState("");

  const handleClick = async (event) => {
    // eslint-disable-next-line default-case
    switch (event.target.id) {
      case 'hourly-weather-btn':
        const hourlyWeather = await getHourlyWeather(coordinates.latitude, coordinates.longitude);
        setFutureForecast({ ...futureForecast, hourlyWeather });
        setActiveDisplay("hourly");
        break;
      case '3hr-weather-btn':
        const threeHrWeather = await getThreeHrWeather(coordinates.latitude, coordinates.longitude);
        setFutureForecast({ ...futureForecast, threeHrWeather });
        setActiveDisplay("threeHour");
        break;
      case 'daily-weather-btn':
        const dailyWeather = await getDailyWeather(coordinates.latitude, coordinates.longitude);
        setFutureForecast({ ...futureForecast, dailyWeather });
        setActiveDisplay("daily");
        break;
    }
  }

  const showFutureForecast = () => {
    // eslint-disable-next-line default-case
    switch(activeDisplay) {
      case 'hourly':
        return <HourlyDisplay futureForecast={futureForecast} />
      case 'threeHour':
        return <ThreeHourDisplay futureForecast={futureForecast} />
      case 'daily':
        return <DailyDisplay futureForecast={futureForecast} />
    }
  }
  
  return (
    <div>
      <div>
        <Button id="hourly-weather-btn" onClick={handleClick}>HOURLY</Button>
        <Button id="3hr-weather-btn" onClick={handleClick}>3HR</Button>
        <Button id="daily-weather-btn" onClick={handleClick}>DAILY</Button>
      </div>
      {showFutureForecast()}
    </div>
  )
}