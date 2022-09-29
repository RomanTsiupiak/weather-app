import React from 'react';

import WeatherCard from 'Components/WeatherCard/WeatherCard';
// import Autocomplete from 'Components/Autocomplete/Autocomplete';

// import axios from 'axios';
//
// const fetchAction = (city: string) =>
//   axios.get('http://api.openweathermap.org/geo/1.0/direct', {
//     params: {
//       q: city,
//       limit: 5,
//       appid: 'f404c0bcddca7d09976ddaacf9cde884',
//     },
//   });

const Weather = () => {
  return (
    <div className="w-[600px] h-[400px] p-[12px] flex flex-col items-center justify-around">
      {/*<Autocomplete fetchAction={fetchAction} />*/}
      <WeatherCard />
    </div>
  );
};

export default Weather;
