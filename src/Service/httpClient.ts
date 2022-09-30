import axios from 'axios';

export const httpClient = axios.create({
  baseURL: '',
  timeout: 1000,
});

httpClient.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    appid: 'f404c0bcddca7d09976ddaacf9cde884',
  };
  return config;
});
