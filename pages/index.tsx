import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import { getWeatherPicture } from "../lib/getWeatherPicture";
import { MainWeather } from "../components/MainWeather";
import { Layout } from "../components/Layout";

interface weatherData {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  name: string;
}

const Home: NextPage = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({} as weatherData);
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=nl&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`;

  const fetchWeather = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setWeather(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    setCity("");
  };

  const src = getWeatherPicture(weather.weather?.[0].main);

  return (
    <div>
      <Layout>
        <Head>
          <title>Weer app</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 style={{ height: "10vh", marginTop: "1rem" }}>Weer app</h1>
        <form onSubmit={fetchWeather}>
          <input
            type="text"
            placeholder="Zoek stad"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{
              backgroundColor: "transparent",
              borderRadius: "6px",
              border: "1px solid #1f293750",
              marginRight: "0.5rem",
            }}
          />
          <button type="submit">Zoeken</button>
        </form>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          weather.main && (
            <MainWeather
              src={src}
              city={weather.name}
              description={weather.weather[0].description}
              degrees={weather.main.temp}
              minDegrees={weather.main.temp_min}
              maxDegrees={weather.main.temp_max}
              humidity={weather.main.humidity}
            />
          )
        )}
      </Layout>
    </div>
  );
};

export default Home;
