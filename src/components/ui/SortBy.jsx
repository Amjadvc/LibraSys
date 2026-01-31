import { useSearchParams } from 'react-router-dom';

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  }

  const sortBy = searchParams.get('sortBy') || '';

  return <Select options={options} value={sortBy} onChange={handleChange} />;
}

export default SortBy;

function Select({ options, value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="border-background-200 bg-background-50 text-text-700 hover:border-background-400 focus:border-primary-400 focus:ring-primary-200 h-full min-h-11 rounded-md border px-3 text-[15px] font-medium shadow-md transition-colors duration-200 focus:outline-none focus:ring-2"
    >
      {options.map((option) => (
        <option
          value={option.value}
          key={option.value}
          className="bg-background-50 text-text-800"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}
