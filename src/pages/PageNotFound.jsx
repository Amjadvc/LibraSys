import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import Button from "../components/ui/Button";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[url('/hero-login.jpg')] bg-cover bg-center px-4">
      <div className="absolute inset-0 bg-[#e2d7c852]"></div>

      <div className="relative z-10 flex max-w-md flex-col items-center justify-center rounded-2xl bg-[#ffffff4f] p-8 text-center shadow-xl backdrop-blur">
        <h1 className="mb-2 text-4xl font-bold text-[#2b4466]">404</h1>
        <p className="mb-4 text-lg font-semibold text-gray-700">
          Page Not Found
        </p>

        <p className="mb-6 text-sm text-[#251f4f]">
          Sorry, the page you're looking for doesn't exist or was moved.
        </p>

        <Button onClick={() => navigate(-1)} variant="secondary">
          <HiArrowLeft size={18} />
          Go Back
        </Button>
      </div>
    </div>
  );
}

export default PageNotFound;
