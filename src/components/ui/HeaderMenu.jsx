import { HiArrowRightOnRectangle, HiOutlineUser } from 'react-icons/hi2';
import ButtonIcon from './ButtonIcon';
import DarkModeToggle from './DarkModeToggle';

function HeaderMenu() {
  return (
    <ul className="flex gap-2">
      <li>
        <ButtonIcon>
          <HiOutlineUser className="h-6 w-6" />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <ButtonIcon>
          <HiArrowRightOnRectangle className="h-6 w-6" />
        </ButtonIcon>
      </li>
    </ul>
  );
}

export default HeaderMenu;
