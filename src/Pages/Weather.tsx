import React from 'react';

import WeatherCard from 'Components/WeatherCard/WeatherCard';
// import { httpClient } from 'Service/httpClient';
// import Autocomplete from 'Components/Autocomplete/Autocomplete';

const Weather = () => {
  // React.useEffect(() => {
  //   httpClient.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99');
  // }, []);

  return (
    <div className="w-[600px] h-[400px] p-[12px] flex flex-col items-center justify-around">
      {/*<Autocomplete fetchAction={fetchAction} />*/}
      <WeatherCard />
    </div>
  );
};

export default Weather;
