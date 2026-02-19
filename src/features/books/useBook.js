import { useQuery } from '@tanstack/react-query';
import { getBook } from '../../services/ApiBooks';

export function useBook(id) {
  const {
    data: book,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['book', id],
    queryFn: () => getBook(id),
    enabled: !!id,
  });

  return { book, isLoading, error };
}
