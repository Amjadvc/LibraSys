import { HiMagnifyingGlass } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

function SearchInput({ placeholder }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  function handleChange(e) {
    const value = e.target.value;
    if (value) searchParams.set("search", value);
    else searchParams.delete("search");
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex min-w-[300px] items-center gap-2 rounded-lg border bg-transparent px-3 py-[9px] text-[16px] font-semibold shadow-md outline-none">
      <HiMagnifyingGlass className="text-[18px] text-brand" />
      <input
        type="text"
        name="guestQuery"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        className="w-full border-none bg-transparent bg-none text-[16px] text-brand outline-none"
      />
    </div>
  );
}

export default SearchInput;
