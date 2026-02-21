import HeroImgLogin from '../components/ui/HeroImgLogin';
import LoginContent from '../components/ui/LoginContent';

function Login() {
  return (
    <main className="min-h-screen bg-[#E2D7C8]">
      <div className="flex flex-col items-center justify-center pb-5 sm:pb-0 md:flex-row md:gap-5">
        <HeroImgLogin />
        <LoginContent />
      </div>
    </main>
  );
}

export default Login;
