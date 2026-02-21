import Button from '../../components/ui/Button';
import InputField from '../../components/ui/InputField';
import { useForm } from 'react-hook-form';
import { useLogin } from './useLogin';
import SpinnerMini from '../../components/ui/SpinnerMini';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, error, isLoading } = useLogin();

  function onSubmit(data) {
    console.log(data);
    login(data);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[400px] flex-col items-center justify-center gap-4"
    >
      <InputField
        type="text"
        placeholder="Enter your email"
        icon="user-email.svg"
        alt="user email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
            message: 'Please enter a valid email address',
          },
        })}
        error={errors?.email?.message}
      />

      <InputField
        type="password"
        placeholder="Enter your password"
        icon="user-pass.svg"
        alt="user password"
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
        })}
        error={errors?.password?.message}
      />

      {error && (
        <span className="error mt-1 pl-2 text-sm font-medium text-red-500">
          {error.response.data.message}
        </span>
      )}
      <Button
        disabled={isLoading}
        type="submit"
        variant="primary"
        customStyle="bg-[#262f4d]  transition-all duration-200 hover:bg-[#151a2e] rounded-xl mt-4 "
      >
        {isLoading ? <SpinnerMini /> : 'Login'}
      </Button>
    </form>
  );
}

export default LoginForm;
