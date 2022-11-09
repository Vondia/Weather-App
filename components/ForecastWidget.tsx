import React, { FC } from "react";
import { css } from "@linaria/core";
import Image from "next/image";

type ForecastWidgetProps = {
  src: string;
  description: string;
  minDegrees: number;
  maxDegrees: number;
  feelsLike: number;
  date: string;
};

export const ForecastWidget: FC<ForecastWidgetProps> = ({
  src,
  description,
  minDegrees,
  maxDegrees,
  feelsLike,
  date,
}) => {
  return (
    <div className={parent}>
      <div className={dateText}>
        <h2>{date}</h2>
      </div>
      <div style={{ width: "100%" }}>
        <div className={image}>
          <Image src={src} alt="weather picture" width="100px" height="60px" />
        </div>
        <div className={text}>
          <h3>{description}</h3>
          <h3>min temp: {Math.round(minDegrees)}°C</h3>
          <h3>max temp: {Math.round(maxDegrees)}°C</h3>
          <h3>Gevoelstemp: {Math.round(feelsLike)}°C</h3>
        </div>
      </div>
    </div>
  );
};

const parent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  overflow: hidden;
`;

const image = css`
  object-fit: fill;
  z-index: 2;
  background-color: #6a47ff90;
  justify-content: center;
  display: flex;
  border-radius: 1rem 1rem 0 0;
`;

const text = css`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 100%;
  color: white;
  background-color: #6a47ff90;
  border-radius: 0 0 1rem 1rem;
  overflow: hidden;
`;

const dateText = css`
  display: flex;
  color: white;
  background-color: #6a47ff90;
  border-radius: 1rem 1rem 0 0;
  padding: 0.25rem 0.5rem 0;

  @media screen and (min-width: 1024px) {
  }
`;
