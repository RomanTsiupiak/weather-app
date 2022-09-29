import React from 'react';

import WeatherCard from 'Components/WeatherCard/WeatherCard';

const Weather = () => {
  return (
    <div className="w-[600px] h-[400px] p-[12px] flex flex-col items-center justify-around">
      <WeatherCard />
    </div>
  );
};

export default Weather;
