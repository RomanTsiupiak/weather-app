import { httpClient, HTTPResponse } from './httpClient';
import {
  GetGeoByCityNameParams,
  GetGeoByCityNameResponse,
  GetWeatherInCityParams,
  GetWeatherInCityResponse,
} from 'types';

export const getGoeByCityName = ({
  q,
  limit = 5,
}: GetGeoByCityNameParams): Promise<HTTPResponse<GetGeoByCityNameResponse[]>> => {
  return httpClient.request({
    method: 'GET',
    baseURL: 'http://api.openweathermap.org/geo/1.0/direct',
    params: {
      q: q,
      limit: limit,
    },
  });
};

export const getSelectedCityWeather = ({
  lat,
  lon,
  ...rest
}: GetWeatherInCityParams): Promise<HTTPResponse<GetWeatherInCityResponse>> => {
  return httpClient.request({
    method: 'GET',
    baseURL: 'https://api.openweathermap.org/data/2.5/weather',
    params: {
      lat: lat,
      lon: lon,
      ...rest,
    },
  });
};
