import React from 'react';

import { DropIcon, CloudIcon, WindIcon, CloudSmallIcon } from '../Icons';

import { LabelIcon } from './LabelIcon';

const WeatherCard = () => (
  <div className="w-[300px] h-[300px] rounded-xl bg-violet-500/70 flex flex-col justify-around">
    <div className="flex justify-center items-center gap-x-[16px]">
      <CloudIcon />
      <div>
        <h1 className="text-5xl">30 {'\u00b0'}</h1>
        <p>Night Rain</p>
      </div>
    </div>
    <div className="flex justify-around">
      <LabelIcon icon={<WindIcon />} label="12.4km/h" />
      <LabelIcon icon={<CloudSmallIcon />} label="12%" />
      <LabelIcon icon={<DropIcon />} label="81%" />
    </div>
  </div>
);

export default WeatherCard;
