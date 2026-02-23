import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from './useLogout';
import ButtonIcon from '../../components/ui/ButtonIcon';
import SpinnerMini from '../../components/ui/SpinnerMini';

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <ButtonIcon onClick={logout} disabled={isLoading}>
      {isLoading ? (
        <SpinnerMini />
      ) : (
        <HiArrowRightOnRectangle className="icon h-6 w-6" />
      )}
    </ButtonIcon>
  );
}

export default Logout;
