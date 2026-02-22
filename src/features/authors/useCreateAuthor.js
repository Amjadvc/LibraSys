import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createAuthorApi } from '../../services/apiAuthors';

export function useCreateAuthor() {
  const queryClient = useQueryClient();

  const { mutate: createAuthor, isPending: isCreatingAuthor } = useMutation({
    mutationFn: createAuthorApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['authors'] });
    },
  });

  return { createAuthor, isCreatingAuthor };
}
