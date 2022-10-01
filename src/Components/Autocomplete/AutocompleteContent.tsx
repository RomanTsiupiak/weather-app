import React from 'react';

type AutocompleteContentProps<RecordType> = {
  data: RecordType[];
  search: string;
  setSearch: (value: string) => void;
  handleSelect: (item: RecordType) => void;
  onChange: (value: string) => void;
};

const AutocompleteContent = <RecordType extends { label: string }>({
  data,
  search,
  setSearch,
  handleSelect,
  onChange,
}: AutocompleteContentProps<RecordType>) => {
  const [display, setDisplay] = React.useState<boolean>(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const onSelect = (item: RecordType) => {
    setSearch(item.label);
    handleSelect(item);
    setDisplay(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const { current } = wrapperRef;

    if (current && !current.contains(event.target as Node)) {
      setDisplay(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="w-full relative">
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
              .filter((el) => el.label.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
              .map((item, index) => (
                <div
                  onClick={() => onSelect(item)}
                  key={index}
                  className="px-[8px] py-[4px] cursor-pointer hover:bg-gray-300"
                >
                  {item.label}
                </div>
              ))}
        </div>
      )}
    </div>
  );
};

export default AutocompleteContent;
