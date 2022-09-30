import React from 'react';

import WeatherCard from 'Components/WeatherCard/WeatherCard';
import Autocomplete from 'Components/Autocomplete/Autocomplete';
import { getGoeByCityName, getSelectedCityWeather } from 'Service/api';
import { GetGeoByCityNameParams, GetWeatherInCityResponse } from 'types';

import { FormatDataForAutoComplete, weatherUtils } from './weatherUtils.utils';

const Weather = () => {
  const [weather, setWeather] = React.useState<GetWeatherInCityResponse | null>(null);

  const handleSelect = ({ lat, lon }: FormatDataForAutoComplete) => {
    getSelectedCityWeather({ lat, lon }).then((res) => setWeather(res.data));
  };

  const handleGetByCityName = ({ q }: GetGeoByCityNameParams) => {
    return getGoeByCityName({ q }).then((res) => weatherUtils.formatDataForAutocomplete(res.data));
  };

  return (
    <div className="w-[600px] h-[400px] p-[12px] flex flex-col items-center justify-around">
      <Autocomplete<FormatDataForAutoComplete> handleSelect={handleSelect} handleChange={handleGetByCityName} />
      {weather && <WeatherCard />}
    </div>
  );
};

export default Weather;
