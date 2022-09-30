import React from 'react';

type UseDebounce<T> = {
  value: T;
  delay: number;
};

export const useDebounce = <T>({ value, delay }: UseDebounce<T>) => {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
