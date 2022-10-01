import React from 'react';

import { GetWeatherInCityResponse } from 'types';
import { DropIcon, WindIcon, CloudSmallIcon } from 'Components/Icons';

import { LabelIcon } from './LabelIcon';
import { weatherCardUtils } from './weatherCardUtils.utils';

type WeatherCardProps = {
  weather: GetWeatherInCityResponse;
};

const WeatherCard = ({ weather }: WeatherCardProps) => (
  <div className="w-[300px] h-[300px] rounded-xl bg-gray-100/10 flex flex-col justify-around">
    <div className="flex justify-center items-center gap-x-[16px]">
      {weatherCardUtils.getWeatherIcon(weather.weather[0].main)}
      <div>
        <h1 className="text-5xl">
          {Math.round(weather.main.temp)} {'\u00b0'}
        </h1>
        <p>{weather.weather[0].description}</p>
      </div>
    </div>
    <div className="flex justify-around">
      <LabelIcon icon={<WindIcon />} label={`${weather.wind.speed}km/h`} />
      <LabelIcon icon={<CloudSmallIcon />} label={`${weather.clouds.all}%`} />
      <LabelIcon icon={<DropIcon />} label={`${weather.main.humidity}%`} />
    </div>
  </div>
);

export default WeatherCard;
