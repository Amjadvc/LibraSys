import Button from '../../components/ui/Button';
import FileInput from '../../components/ui/FileInput';
import Form from '../../components/ui/Form';
import FormRow from '../../components/ui/FormRow';
import Input from '../../components/ui/Input';
import { useForm } from 'react-hook-form';

function UpdateUserDataForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'amjadal@gmial.com',
      fullName: '',
      avatar: null,
    },
  });

  const onSubmit = (data) => {
    console.log('Updated user data:', data);
  };

  return (
    <Form varinet="inventoryModal" onSubmit={handleSubmit(onSubmit)}>
      {/* Email (disabled) */}
      <FormRow label="Email address" type="createBookFormStyle">
        <Input disabled {...register('email')} />
      </FormRow>

      {/* Full Name */}
      <FormRow
        label="Full name"
        type="createBookFormStyle"
        error={errors?.fullName?.message}
      >
        <Input
          type="text"
          {...register('fullName', {
            required: 'Full name is required',
            minLength: {
              value: 3,
              message: 'Full name must be at least 3 characters',
            },
          })}
        />
      </FormRow>

      {/* Avatar */}
      <FormRow
        label="Avatar image"
        type="createBookFormStyle"
        error={errors?.avatar?.message}
      >
        <FileInput
          accept="image/*"
          {...register('avatar', {
            validate: {
              fileSize: (files) =>
                !files?.[0] ||
                files[0].size < 2 * 1024 * 1024 ||
                'Image must be less than 2MB',
            },
          })}
        />
      </FormRow>

      {/* Buttons */}
      <FormRow type="hasbuttons">
        <Button type="button" variant="third" onClick={() => reset()}>
          Cancel
        </Button>

        <Button type="submit" variant="formbutton">
          Update account
        </Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
