import React from 'react';

import AutocompleteContent from './AutocompleteContent';
import { autocompleteUtils } from './autocompleteUtils.utils';

type AutocompleteProps = {
  // TODO: remove any after implementation httpClient
  fetchAction: any;
};

const Autocomplete = <RecordType,>({ fetchAction }: AutocompleteProps) => {
  const [options, setOptions] = React.useState<RecordType[]>([]);
  const [search, setSearch] = React.useState<string>('');

  const onChange = (value: string) => {
    setSearch(value);
    // TODO: update after implementation useDebounce and httpClient
    if (value) {
      fetchAction(value).then((res: any) => setOptions(res.data));
    }
  };

  return (
    <AutocompleteContent
      data={autocompleteUtils.formatData(options)}
      search={search}
      setSearch={setSearch}
      onChange={onChange}
    />
  );
};

export default Autocomplete;
