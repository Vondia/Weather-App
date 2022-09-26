import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import { getWeatherPicture } from "../lib/getWeatherPicture";
import { MainWeather } from "../components/MainWeather";
import { Layout } from "../components/Layout";
import { GoSearch } from "react-icons/go";
import { css } from "@linaria/core";
import { weatherForecast } from "../lib/weatherType";
import { ForecastWidget } from "../components/ForecastWidget";
import { getNextDay } from "../lib/getNextDay";

const Home: NextPage = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({} as weatherForecast);
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=nl&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`;

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

  const src = getWeatherPicture(weather.list?.[0].weather?.[0].main);

  const forecastList = weather.list;
  const nextDayList = getNextDay();
  const forecastFilteredDays = nextDayList?.map((day) => forecastList?.[day]);

  return (
    <div>
      <Layout>
        <Head>
          <title>Weer app</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className={title}>Wéér</h1>
        <form onSubmit={fetchWeather} className={form}>
          <input
            type="text"
            placeholder="Zoek stad"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={input}
          />
          <button type="submit" className={button}>
            <GoSearch />
          </button>
        </form>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          weather.list?.[0].main && (
            <MainWeather
              src={src}
              city={weather.city.name}
              description={weather.list?.[0].weather[0].description}
              degrees={weather.list?.[0].main.temp}
              minDegrees={weather.list?.[0].main.temp_min}
              maxDegrees={weather.list?.[0].main.temp_max}
              humidity={weather.list?.[0].main.humidity}
              feelsLike={weather.list?.[0].main.feels_like}
              rain={weather.list?.[0].rain?.["3h"]}
              weatherMain={weather.list?.[0].weather[0].main}
            />
          )
        )}
        <div className={forecastDisplay}>
          {weather.list?.[0].main &&
            forecastFilteredDays?.map((weather, index) => (
              <ForecastWidget
                key={index}
                date={weather?.dt_txt.slice(0, 11)}
                src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
                description={weather?.weather[0].description}
                minDegrees={weather?.main.temp_min}
                maxDegrees={weather?.main.temp_max}
                feelsLike={weather?.main.feels_like}
              />
            ))}
        </div>
      </Layout>
    </div>
  );
};

const title = css`
  height: 10vh;
  margin-top: 1rem;
  font-weight: bold;
  font-size: 3em;
`;

const form = css`
  display: flex;
  justify-content: center;
  position: relative;
  width: fit-content;
`;

const input = css`
  background-color: transparent;
  border-radius: 6px;
  border: 1px solid #1f293750;
  padding: 0.5rem 1.25rem 0.5rem 0.5rem;
`;

const button = css`
  position: absolute;
  right: 0;
  margin-right: 0.25rem;
  margin-top: 0.5rem;
  z-index: 10;
`;

const forecastDisplay = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-top: 3rem;
  width: fit-content;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default Home;
