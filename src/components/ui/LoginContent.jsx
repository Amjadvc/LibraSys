import LoginForm from '../../features/authentication/LoginForm';
import PageTitle from './PageTitle';

function LoginContent() {
  return (
    <section className="flex w-full flex-col items-center gap-10 px-4 md:w-1/2">
      <div className="intro flex max-w-[400px] flex-col items-center justify-center">
        <PageTitle
          title="Admin Login"
          classes="mb-2 text-center text-[35px] md:text-[50px] dark:text-[#262f4d]"
        />
        <p className="text-center text-[15px] text-[#363062]">
          Welcome back! Please enter your credentials below to access the admin
          dashboard and manage your platform.
        </p>
      </div>
      <LoginForm />
    </section>
  );
}

export default LoginContent;
