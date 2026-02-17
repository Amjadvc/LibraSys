import Button from '../../components/ui/Button';
import Form from '../../components/ui/Form';
import FormRow from '../../components/ui/FormRow';
import Input from '../../components/ui/Input';
import { useForm } from 'react-hook-form';

function UpdatePasswordForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch('password');

  const onSubmit = (data) => {
    console.log('Password updated:', data);
    reset();
  };

  return (
    <Form varinet="inventoryModal" onSubmit={handleSubmit(onSubmit)}>
      {/* New Password */}
      <FormRow
        label="New Password (min 8 chars)"
        type="createBookFormStyle"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          })}
        />
      </FormRow>

      {/* Confirm Password */}
      <FormRow
        label="Confirm password"
        type="createBookFormStyle"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          {...register('passwordConfirm', {
            required: 'Please confirm your password',
            validate: (value) => value === password || 'Passwords do not match',
          })}
        />
      </FormRow>

      {/* Buttons */}
      <FormRow type="hasbuttons">
        <Button type="button" variant="third" onClick={() => reset()}>
          Cancel
        </Button>

        <Button type="submit" variant="formbutton">
          Update password
        </Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
