import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCategoryApi } from '../../services/apiCategories';

export function useUpdateCategory() {
  const queryClient = useQueryClient();

  const { mutate: updateCategory, isPending: isUpdatingCategory } = useMutation(
    {
      mutationFn: ({ id, newCategoryData }) =>
        updateCategoryApi(id, newCategoryData),

      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['categories'] });
      },

      onError: (err) => {
        console.error('Update Category Error:', err.message);
      },
    },
  );

  return { updateCategory, isUpdatingCategory };
}
