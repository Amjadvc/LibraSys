import { useQuery } from '@tanstack/react-query';
import { getBooks } from '../../services/apiBooks';
import { useSearchParams } from 'react-router-dom';

export function useBooks() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const { isLoading, data, error } = useQuery({
    queryKey: ['books', page],
    queryFn: () => getBooks(page),
  });

  return {
    books: data?.books || [],
    pagination: data?.pagination || {},
    isLoading,
    error,
  };
}
