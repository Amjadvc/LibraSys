import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBookApi } from '../../services/apiBooks';

export function useUpdateBook() {
  const queryClient = useQueryClient();

  const { mutate: updateBook, isPending: isUpdatingBook } = useMutation({
    mutationFn: ({ id, newBookData }) => updateBookApi(id, newBookData),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },

    onError: (err) => console.log(err),
  });

  return { updateBook, isUpdatingBook };
}
