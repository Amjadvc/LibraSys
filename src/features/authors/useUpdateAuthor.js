import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateAuthorApi } from '../../services/apiAuthors';

export function useUpdateAuthor() {
  const queryClient = useQueryClient();

  const { mutate: updateAuthor, isPending: isUpdatingAuthor } = useMutation({
    mutationFn: ({ id, newAuthorData }) => updateAuthorApi(id, newAuthorData),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['authors'] });
    },
  });

  return { updateAuthor, isUpdatingAuthor };
}
