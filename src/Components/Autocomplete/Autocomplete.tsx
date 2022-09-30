import React from 'react';

import { GetGeoByCityNameParams } from 'types';
import { useDebounce } from 'hooks/useDebounce';

import AutocompleteContent from './AutocompleteContent';

type AutocompleteProps<RecordType> = {
  handleGetByCityName: (params: GetGeoByCityNameParams) => Promise<RecordType[]>;
  handleSelect: (item: RecordType) => void;
};

const Autocomplete = <RecordType extends { label: string }>({
  handleGetByCityName,
  handleSelect,
}: AutocompleteProps<RecordType>) => {
  const [options, setOptions] = React.useState<RecordType[]>([]);
  const [search, setSearch] = React.useState<string>('');
  const debouncedSearch = useDebounce<string>({ value: search, delay: 700 });

  React.useEffect(() => {
    if (debouncedSearch) {
      handleGetByCityName({ q: debouncedSearch }).then((res) => setOptions(res));
    }
  }, [debouncedSearch]);

  return (
    <AutocompleteContent<RecordType>
      data={options}
      search={search}
      setSearch={setSearch}
      handleSelect={handleSelect}
      onChange={setSearch}
    />
  );
};

export default Autocomplete;
