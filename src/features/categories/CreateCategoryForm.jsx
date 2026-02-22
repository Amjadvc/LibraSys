import { useForm } from 'react-hook-form';
import Button from '../../components/ui/Button';
import Form from '../../components/ui/Form';
import FormRow from '../../components/ui/FormRow';
import Input from '../../components/ui/Input';
import { useCreateCategory } from './useCreateCategory';
import { useUpdateCategory } from './useUpdateCategory';
import SpinnerMini from '../../components/ui/SpinnerMini';

function CreateCategoryForm({ categoryToEdit = {}, onCloseModal }) {
  const { createCategory, isCreatingCategory } = useCreateCategory();
  const { updateCategory, isUpdatingCategory } = useUpdateCategory();

  const { id: editId, ...editValues } = categoryToEdit;
  const isEditSession = Boolean(editId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const isWorking = isCreatingCategory || isUpdatingCategory;

  function onSubmit(data) {
    if (isEditSession) {
      updateCategory(
        { id: editId, newCategoryData: data },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    } else {
      createCategory(data, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      });
    }
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Category Name"
        type="catergoryFormStyle"
        error={errors?.name?.message}
      >
        <Input
          type="text"
          className="h-[40px]"
          {...register('name', {
            required: 'Category name is required',
            minLength: {
              value: 3,
              message: 'Category name must be at least 3 characters',
            },
          })}
        />
      </FormRow>
      <FormRow
        type="hasbuttons"
        customeClasses="flex justify-end gap-[10px] items-center"
      >
        <Button
          variant="third"
          type="button"
          onClick={() => reset()}
          disabled={isWorking}
        >
          Cancle
        </Button>
        <Button variant="formbutton" disabled={isWorking}>
          {isWorking ? (
            <SpinnerMini />
          ) : isEditSession ? (
            'Edit Category'
          ) : (
            'Add Category'
          )}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCategoryForm;
