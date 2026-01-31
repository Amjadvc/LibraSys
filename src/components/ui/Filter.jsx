import { useSearchParams } from 'react-router-dom';

function Filter({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get('page')) searchParams.set('page', 1);

    setSearchParams(searchParams);
  }

  return (
    <div className="border-background-200 bg-background-50 flex h-full min-h-11 gap-1 rounded-lg border p-1 shadow-md">
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
          label={option.label}
        />
      ))}
    </div>
  );
}

export default Filter;

function FilterButton({ onClick, active, disabled, label }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-3 py-[5px] text-[15px] font-medium transition-all duration-200 ${
        active
          ? `bg-primary-200 text-primary-800 cursor-not-allowed shadow-inner `
          : `text-text-600 hover:bg-background-200 hover:text-text-800 `
      } focus-visible:ring-accent-400 focus-visible:outline-none focus-visible:ring-2`}
    >
      {label}
    </button>
  );
}
