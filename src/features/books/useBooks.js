import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBooks } from '../../services/apiBooks';
import { useSearchParams } from 'react-router-dom';

export function useBooks() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const queryClient = useQueryClient();

  const { isLoading, data, error } = useQuery({
    queryKey: ['books', page],
    queryFn: () => getBooks(page),
  });

  const lastPage = data?.pagination?.last_page || 1;

  // Prefetch next page
  if (page < lastPage) {
    queryClient.prefetchQuery({
      queryKey: ['books', page + 1],
      queryFn: () => getBooks(page + 1),
    });
  }

  // Prefetch previous page
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ['books', page - 1],
      queryFn: () => getBooks(page - 1),
    });
  }

  return {
    books: data?.books || [],
    pagination: data?.pagination || {},
    isLoading,
    error,
  };
}
