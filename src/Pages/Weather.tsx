import React from 'react';

import WeatherCard from 'Components/WeatherCard/WeatherCard';
import Autocomplete from 'Components/Autocomplete';

import { placeData } from '../mocks';

const Weather = () => {
  return (
    <div className="w-[600px] h-[400px] p-[12px] flex flex-col items-center justify-around">
      <Autocomplete data={placeData} />
      <WeatherCard />
    </div>
  );
};

export default Weather;
