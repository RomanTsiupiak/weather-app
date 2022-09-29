import React from 'react';

type AutocompleteDataType = {
  id: number;
  label: string;
};

type AutocompleteProps = {
  data: AutocompleteDataType[];
};

const Autocomplete = ({ data }: AutocompleteProps) => {
  const [display, setDisplay] = React.useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [options, setOptions] = React.useState<AutocompleteDataType[]>(data);
  const [search, setSearch] = React.useState<string>('');

  const onSelect = (value: string) => {
    setSearch(value);
    setDisplay(false);
  };

  return (
    <div className="w-full relative">
      <input
        className="w-full py-[4px] px-[8px] bg-gray-300/70 rounded-md outline-none"
        onClick={() => setDisplay((prev) => !prev)}
        placeholder="Type for search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {display && (
        <div className="w-full absolute bg-gray-300/70 my-[4px] rounded-md max-h-[300px] overflow-y-scroll">
          {options.length ? (
            options
              .filter((item) => item.label.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
              .map((item) => (
                <div onClick={() => onSelect(item.label)} key={item.id} className="px-[8px] py-[4px] cursor-pointer">
                  {item.label}
                </div>
              ))
          ) : (
            <div className="flex justify-center">No results</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
