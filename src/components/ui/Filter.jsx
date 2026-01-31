import { useSearchParams } from "react-router-dom";

function Filter({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-1 rounded-lg border p-1 shadow-md">
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
      className="rounded-lg px-2 py-[4.4px] text-[16px] font-semibold text-brand outline-none transition-all duration-300 hover:bg-brand hover:text-white"
    >
      {label}
    </button>
  );
}
