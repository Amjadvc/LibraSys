import { MdMenuOpen } from 'react-icons/md';
import ToggleButton from '../ToggleButton';
import Logo from './Logo';
import MainNav from './MainNav';

function Sidebar({ isOpen, handleToggleSidebar }) {
  return (
    <aside
      className={`fixed left-0 top-0 z-50 h-full w-[300px] ${isOpen ? 'translate-x-0' : '-translate-x-full'} row-span-full flex flex-col gap-[3.2rem] overflow-hidden border-r border-background-200 bg-background-100 px-[2rem] py-[3.2rem] transition-all duration-300 md:relative md:w-[19rem] md:translate-x-0`}
    >
      <Logo />
      <MainNav />

      <ToggleButton
        onClick={handleToggleSidebar}
        customStyle="absolute z-[100] top-[15px] right-[5px] z-[100px] bg-background-100 hover:bg-background-50 block w-fit"
      >
        <MdMenuOpen color="var(--color-brand-600)" className="h-6 w-6" />
      </ToggleButton>
    </aside>
  );
}

export default Sidebar;
