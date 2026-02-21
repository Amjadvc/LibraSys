import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBookApi } from '../../services/apiBooks';

export function useDeleteBook() {
  const queryClient = useQueryClient();
  const { mutate: deleteBook, isPending: isDeleting } = useMutation({
    mutationFn: deleteBookApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
    onError: (err) => console.log(err),
  });
  return { deleteBook, isDeleting };
}
