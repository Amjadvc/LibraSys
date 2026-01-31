import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  const sortBy = searchParams.get("sortBy") || "";

  return <Select options={options} value={sortBy} onChange={handleChange} />;
}

export default SortBy;

function Select({ options, value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="min-h-[] rounded-lg border bg-transparent px-3 py-[10px] text-[16px] font-semibold text-brand shadow-md outline-none"
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
