import Button from "../../components/ui/Button";
import InputField from "../../components/ui/InputField";

function LoginForm() {
  return (
    <form className="flex w-full max-w-[400px] flex-col items-center justify-center gap-4">
      <InputField
        type="text"
        name="email"
        placeholder="Enter your email"
        icon="user-email.svg"
        alt="user email"
      />

      <InputField
        type="password"
        name="password"
        placeholder="Enter your password"
        icon="user-pass.svg"
        alt="user password"
      />

      <Button variant="primary">Login</Button>
    </form>
  );
}

export default LoginForm;
