import React from 'react';
import { SunIcon, RainIcon, CloudIcon, SnowIcon } from 'Components/Icons';

enum WeatherKind {
  rain = 'Rain',
  clouds = 'Clouds',
  clear = 'Clear',
  snow = 'Snow',
}

export const weatherCardUtils = {
  getWeatherIcon: (kind: string) => {
    switch (kind) {
      case WeatherKind.rain:
        return <RainIcon size={100} />;
      case WeatherKind.clouds:
        return <CloudIcon size={100} />;
      case WeatherKind.clear:
        return <SunIcon size={100} />;
      case WeatherKind.snow:
        return <SnowIcon size={100} />;
    }
  },
};
