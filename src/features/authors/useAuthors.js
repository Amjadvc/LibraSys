import { useQuery } from '@tanstack/react-query';
import { getAuthors } from '../../services/apiAuthors';

export function useAuthors() {
  const {
    data: authors,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['authors'],
    queryFn: getAuthors,
  });

  return { authors, isLoading, error };
}
