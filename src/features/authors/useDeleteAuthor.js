import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAuthorApi } from '../../services/apiAuthors';

export function useDeleteAuthor() {
  const queryClient = useQueryClient();

  const { mutate: deleteAuthor, isPending: isDeleting } = useMutation({
    mutationFn: deleteAuthorApi,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ['authors'] });
    },
  });

  return { deleteAuthor, isDeleting };
}
