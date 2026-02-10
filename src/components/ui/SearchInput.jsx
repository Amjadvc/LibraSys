import { HiMagnifyingGlass } from 'react-icons/hi2';
import { useSearchParams } from 'react-router-dom';

function SearchInput({ placeholder }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

  function handleChange(e) {
    const value = e.target.value;
    if (value) searchParams.set('search', value);
    else searchParams.delete('search');
    searchParams.set('page', 1);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex min-h-11 min-w-[300px] items-center gap-2 rounded-lg border border-background-200 bg-background-50 px-3 py-[9px] text-[16px] font-semibold shadow-md">
      <HiMagnifyingGlass className="h-5 w-5 text-text-600" />
      <input
        type="text"
        name="guestQuery"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        className="w-full border-none bg-transparent bg-none text-[16px] text-text-800 outline-none placeholder:text-text-400 dark:text-text-900"
      />
    </div>
  );
}

export default SearchInput;
