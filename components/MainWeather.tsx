import React, { FC } from "react";
import { css } from "@linaria/core";
import Image from "next/image";

type MainWeatherProps = {
  src: string;
  city: string;
  description: string;
  degrees: number;
  minDegrees: number;
  maxDegrees: number;
  humidity: number;
  feelsLike: number;
};

export const MainWeather: FC<MainWeatherProps> = ({
  src,
  city,
  description,
  degrees,
  minDegrees,
  maxDegrees,
  humidity,
  feelsLike,
}) => {
  return (
    <div className={parent}>
      <div className={cityText}>
        <h2>{city}</h2>
      </div>
      <div className={image}>
        <Image src={src} alt="weather picture" width="500px" height="300px" />
      </div>
      <div className={text}>
        <h3>{description}</h3>
        <h3>huidige temp:{Math.round(degrees)}°C</h3>
        <h3>Luchtvochtigheid: {humidity}%</h3>
        <h3>min temp: {Math.round(minDegrees)}°C</h3>
        <h3>Gevoelstemp: {Math.round(feelsLike)}°C</h3>
        <h3>max temp: {Math.round(maxDegrees)}°C</h3>
      </div>
    </div>
  );
};

const parent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  border-radius: 1rem 1rem 1rem 0;
  overflow: hidden;
  margin-top: 3rem;
`;

const image = css`
  object-fit: fill;
`;

const text = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 1em;
  width: 100%;
  color: white;
  background-color: #6a47ff90;
  margin-top: -3px;

  @media screen and (min-width: 1024px) {
    font-size: 1.25em;
  }
`;

const cityText = css`
  font-size: 1.5em;
  color: white;
  background-color: #6a47ff90;
  border-radius: 1rem 1rem 0 0;
  padding: 0.25rem 0.5rem 0;

  @media screen and (min-width: 1024px) {
    font-size: 2em;
  }
`;
