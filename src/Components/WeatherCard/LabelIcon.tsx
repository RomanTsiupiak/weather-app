import React from 'react';
import clsx from 'clsx';

type LabelIconProps = {
  icon: React.ReactNode;
  label: string;
} & React.ComponentProps<'div'>;

export const LabelIcon = ({ icon, label, className }: LabelIconProps) => (
  <div className={clsx('text-lg text-white flex flex-col items-center', className)}>
    {icon}
    <label>{label}</label>
  </div>
);
