import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../services/apiAuth';

export function useAuth() {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    retry: false, // don't retry on 401
  });

  const isAuthenticated = !!user && !isError;

  return { user, isLoading, isError, isAuthenticated };
}
