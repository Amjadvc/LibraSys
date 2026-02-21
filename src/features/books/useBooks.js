import { useQuery } from '@tanstack/react-query';
import { getBooks } from '../../services/apiBooks';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../utils/constants';

export function useBooks() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const {
    isLoading,
    data: allBooks = [],
    error,
  } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks,
  });

  const total = allBooks.length; //100

  // Slice books array to get current page items
  const books = allBooks.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  return { books, total, isLoading, error };
}
