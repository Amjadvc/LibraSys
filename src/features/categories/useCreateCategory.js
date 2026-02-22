import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCategoryApi } from '../../services/apiCategories';

export function useCreateCategory() {
  const queryClient = useQueryClient();

  const { mutate: createCategory, isPending: isCreatingCategory } = useMutation(
    {
      mutationFn: createCategoryApi,

      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['categories'] });
      },

      onError: (err) => {
        console.error('Create Category Error:', err.message);
      },
    },
  );

  return { createCategory, isCreatingCategory };
}
