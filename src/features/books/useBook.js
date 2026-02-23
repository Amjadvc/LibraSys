import { useQuery } from '@tanstack/react-query';
import { getBook } from '../../services/apiBooks';

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
