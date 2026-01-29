import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex w-full items-center justify-between">
      <p className="ml-2 text-[14px]">
        Shoing
        <span className="px-1 font-semibold text-gray-700">
          {(currentPage - 1) * PAGE_SIZE + 1}
        </span>
        to
        <span className="px-1 font-semibold text-gray-700">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>
        of<span className="px-1 font-semibold text-gray-700">{count}</span>{" "}
        results
      </p>
      <div className="flex gap-[6px]">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="flex items-center justify-center gap-1 rounded-lg border-none px-[12px] py-[6px] text-[14px] font-semibold text-gray-700 outline-none transition-all duration-300 hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          <HiChevronLeft className="h-5 w-5" />
          <span>Previous</span>
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className="flex items-center justify-center gap-1 rounded-lg border-none px-[12px] py-[6px] text-[14px] font-semibold text-gray-700 outline-none transition-all duration-300 hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span>Next</span>
          <HiChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
