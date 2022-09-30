import axios, { AxiosResponse } from 'axios';

export type HTTPResponse<T> = AxiosResponse<T>;

export const httpClient = axios.create({
  baseURL: '',
  timeout: 1000,
});

httpClient.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    appid: process.env.REACT_APP_API_KEY,
  };
  return config;
});
