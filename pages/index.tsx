import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { useState } from "react";

const Home: NextPage = () => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=amsterdam&lang=nl&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`;

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
  };

  return (
    <div>
      <Head>
        <title>Weer app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={fetchWeather}>Do we get data?</button>
    </div>
  );
};

export default Home;
