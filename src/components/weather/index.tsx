import { Box } from "@mui/material";
import { CurrentWeatherAttr } from "../../services/city/types";
import './index.css'

type WeatherProps = {
  currentWeather  :CurrentWeatherAttr
}

const pathIconWeather = (code:string) => `http://openweathermap.org/img/w/${code}.png`

export const Weather = ({ currentWeather }:WeatherProps) => {
  return (
    <div className="container">
      <Box
        sx={{
          width: 350,
          padding: "1rem",
          backgroundColor: "primary.light",
          "&:hover": {
            backgroundColor: "primary.main",
          },
        }}
      >
        <h2 className="tittle">Clima actúal en {currentWeather.name}</h2>
        <div className="temp">
          <img
            src={pathIconWeather(currentWeather.weather[0].icon)}
            alt="icon-weather"
            width={64}
          />
          <h1>{currentWeather.main.temp} °C</h1>
        </div>
        <div>
          <span>
            <strong>Sensación térmica</strong> {currentWeather.main.feels_like}
            °C {currentWeather.weather[0].description}{" "}
          </span>
          <small>
            (Temperatura Min: {currentWeather.main.temp_Min} - Temperatura Max:{" "}
            {currentWeather.main.temp_Max})
          </small>
        </div>
        <p>
          <strong>Vientos</strong> {currentWeather.wind.speed}m/s
        </p>
        <p>
          <strong>Humedad</strong> {currentWeather.main.humidity}%
        </p>
      </Box>
    </div>
  );
}
