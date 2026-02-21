import { Navigate } from 'react-router-dom';
import Spinner from '../../components/ui/Spinner';
import { useAuth } from './useAuth';

function ProtactRoute({ children }) {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background-200">
        <Spinner title="." />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtactRoute;
