import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../utils/constants';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function Pagination({ pagination }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = pagination.current_page || 1;
  const lastPage = pagination.last_page || 1;
  const total = pagination.total || 0;
  const perPage = pagination.per_page || 10;

  function nextPage() {
    const next = currentPage === lastPage ? currentPage : currentPage + 1;
    searchParams.set('page', next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set('page', prev);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex w-full items-center justify-between">
      <p className="ml-2 text-[14px] text-text-700">
        Shoing
        <span className="px-1 font-semibold text-text-800">
          {(currentPage - 1) * perPage + 1}
        </span>
        to
        <span className="px-1 font-semibold text-text-800">
          {currentPage === lastPage ? total : currentPage * perPage}
        </span>
        of<span className="px-1 font-semibold text-text-800">{total}</span>{' '}
        results
      </p>
      <div className="flex gap-[6px]">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="flex items-center justify-center gap-1 rounded-lg bg-background-50 px-[12px] py-[6px] text-[14px] font-semibold text-text-700 outline-none transition-all duration-300 hover:bg-accent-500 hover:text-white disabled:cursor-not-allowed disabled:text-text-400 disabled:opacity-50"
        >
          <HiChevronLeft className="h-5 w-5" />
          <span>Previous</span>
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === lastPage}
          className="flex items-center justify-center gap-1 rounded-lg bg-background-50 px-[12px] py-[6px] text-[14px] font-semibold text-text-700 outline-none transition-all duration-300 hover:bg-accent-500 hover:text-white disabled:cursor-not-allowed disabled:text-text-400 disabled:opacity-50"
        >
          <span>Next</span>
          <HiChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
