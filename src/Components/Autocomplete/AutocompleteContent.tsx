import React from 'react';

type AutocompleteDataType = {
  id: number;
  label: string;
};

type AutocompleteContentProps = {
  data: AutocompleteDataType[];
  search: string;
  setSearch: (value: string) => void;
  onChange: (value: string) => void;
};

const AutocompleteContent = ({ data, search, setSearch, onChange }: AutocompleteContentProps) => {
  const [display, setDisplay] = React.useState<boolean>(false);

  const onSelect = (value: string) => {
    setSearch(value);
    setDisplay(false);
  };

  console.log(data);

  return (
    <div className="w-full relative">
      <input
        className="w-full py-[4px] px-[8px] bg-gray-300/70 rounded-md outline-none"
        onClick={() => setDisplay((prev) => !prev)}
        placeholder="Type for search"
        value={search}
        onChange={(event) => onChange(event.target.value)}
      />
      {display && (
        <div className="w-full absolute bg-gray-300/70 my-[4px] rounded-md max-h-[300px] overflow-y-scroll">
          {Boolean(data.length) &&
            data
              .filter((item) => item.label.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
              .map((item) => (
                <div onClick={() => onSelect(item.label)} key={item.id} className="px-[8px] py-[4px] cursor-pointer">
                  {item.label}
                </div>
              ))}
        </div>
      )}
    </div>
  );
};

export default AutocompleteContent;
