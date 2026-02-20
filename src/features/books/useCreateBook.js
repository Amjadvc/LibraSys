import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createBookApi } from '../../services/ApiBooks';

export function useCreateBook() {
  const queryClient = useQueryClient();
  const { mutate: createBook, isPending: isCreatingBook } = useMutation({
    mutationFn: createBookApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
    onError: (err) => console.log(err),
  });
  return { createBook, isCreatingBook };
}
