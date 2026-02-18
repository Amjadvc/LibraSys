import { useQuery } from '@tanstack/react-query';
import { getBooks } from '../../services/ApiBooks';

export function useBooks() {
  const {
    isLoading,
    data: books,
    error,
  } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks,
  });
  return { books, isLoading, error };
}
