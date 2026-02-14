import { TfiMenuAlt } from 'react-icons/tfi';
import HeaderMenu from './HeaderMenu';
import ToggleButton from './ToggleButton';

function Header({ onToggleSidebar }) {
  return (
    <header className="flex items-center justify-between border-b border-background-200 bg-background-50 px-[20px] py-[12px] shadow-sm md:justify-end md:px-12 md:py-3">
      <ToggleButton
        onClick={onToggleSidebar}
        aria-label="Toggle menu"
        customStyle="bg-background-50 hover:bg-background-100 block"
      >
        <TfiMenuAlt color="var(--color-brand-600)" className="h-6 w-6" />
      </ToggleButton>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 text-[14px] font-medium text-text-700">
          <img
            src="/default-user.jpg"
            alt="user avatar"
            className="block w-9 rounded-full border border-background-200 object-cover"
          />
          <span>demo</span>
        </div>

        <HeaderMenu />
      </div>
    </header>
  );
}

export default Header;
