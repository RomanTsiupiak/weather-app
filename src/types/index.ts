export type GetGeoByCityNameParams = {
  q: string;
  limit?: number;
};

export interface GetGeoByCityNameResponse {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export type GetWeatherInCityParams = {
  lat: number;
  lon: number;
  mode?: 'XML' | 'HTML' | 'JSON';
  units?: 'standard' | 'metric' | 'imperial';
  land?: string;
};

export interface GetWeatherInCityResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    '1h': number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
