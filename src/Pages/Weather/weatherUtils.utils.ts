import { GetGeoByCityNameResponse } from 'types';

export type FormatDataForAutoComplete = { label: string } & Omit<GetGeoByCityNameResponse, 'name' | 'country'>;

export const weatherUtils = {
  formatDataForAutocomplete: (data: GetGeoByCityNameResponse[]): FormatDataForAutoComplete[] => {
    return data.map((item) => ({ label: `${item.name}, ${item.country}`, ...item }));
  },
};
