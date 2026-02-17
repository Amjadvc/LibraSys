import { useForm } from 'react-hook-form';
import Button from '../../components/ui/Button';
import Form from '../../components/ui/Form';
import FormRow from '../../components/ui/FormRow';
import Input from '../../components/ui/Input';

function CreateCategoryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Category Name"
        type="catergoryFormStyle"
        error={errors?.title?.message}
      >
        <Input
          type="text"
          name="title"
          className="h-[40px]"
          {...register('title', {
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
        <Button variant="third" type="button" onClick={() => reset()}>
          Cancle
        </Button>
        <Button variant="formbutton">Add Category</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCategoryForm;
