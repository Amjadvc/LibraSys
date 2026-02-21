import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: login,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: loginApi,

    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user);
      navigate('/dashboard', { replace: true });
    },
  });

  return { login, isLoading, error };
}
