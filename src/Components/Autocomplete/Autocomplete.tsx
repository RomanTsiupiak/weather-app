import React from 'react';

import { GetGeoByCityNameParams } from 'types';

import AutocompleteContent from './AutocompleteContent';

type AutocompleteProps<RecordType> = {
  handleChange: (params: GetGeoByCityNameParams) => Promise<RecordType[]>;
  handleSelect: (item: RecordType) => void;
};

const Autocomplete = <RecordType extends { label: string }>({
  handleChange,
  handleSelect,
}: AutocompleteProps<RecordType>) => {
  const [options, setOptions] = React.useState<RecordType[]>([]);
  const [search, setSearch] = React.useState<string>('');

  const onChange = (value: string) => {
    setSearch(value);
    if (value) {
      handleChange({ q: value }).then((res) => setOptions(res));
    }
  };

  return (
    <AutocompleteContent<RecordType>
      data={options}
      search={search}
      setSearch={setSearch}
      handleSelect={handleSelect}
      onChange={onChange}
    />
  );
};

export default Autocomplete;
