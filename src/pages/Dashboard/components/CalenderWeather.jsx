import { Box, Container, Typography } from "@mui/material";
import { images } from "../../../assets/images/Images";
import { containerCalender } from "../style";
import { useEffect, useState } from "react";

const CalenderWeather = ({ data }) => {
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "http://api.weatherapi.com/v1/current.json?key=534b7602aca647779b5230212232004&q=Buenos%20Aires%20Province"
            );
            const data = await response.json();
            setWeatherData(data);
        };
        fetchData();
    }, []);
  return (

    <Box sx={containerCalender}>
      <>
      <img src={weatherData.current?.condition?.icon} />
    <Typography>{`Humedad: ${weatherData.current?.humidity}%`}</Typography>
    <Typography>{`Velocidad del viento: ${weatherData.current?.wind_kph} km/h`}</Typography>
    <Typography>{`Índice UV: ${weatherData.current?.uv}`}</Typography>
              </>
          <Typography>{`Temperatura: ${weatherData.current?.temp_c} °C`}</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", p: 1 }}>
        {data?.map(({ date, description }) => (
          <Typography
            key={`${date} ${description}`}
            variant="h4"
          >{`${date} (${description})`}</Typography>
        ))}
                <Typography>{`Clima en Buenos Aires Province: ${weatherData.current?.condition?.text}`}</Typography>
      </Box>
    </Box>
  );
};
export default CalenderWeather;