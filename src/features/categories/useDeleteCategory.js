import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCategoryApi } from '../../services/apiCategories';

export function useDeleteCategory() {
  const queryClient = useQueryClient();

  const { mutate: deleteCategory, isPending: isDeleting } = useMutation({
    mutationFn: deleteCategoryApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
    onError: (err) => console.error(err),
  });

  return { deleteCategory, isDeleting };
}
