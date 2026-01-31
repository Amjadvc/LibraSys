import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import { useDarkMode } from '../../context/DarkModeContext';
import ButtonIcon from './ButtonIcon';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="text-brand h-[26px] w-[26px]" />
      ) : (
        <HiOutlineMoon className="text-brand h-[26px] w-[26px]" />
      )}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
