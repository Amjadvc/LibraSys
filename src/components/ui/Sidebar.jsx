import Logo from './Logo';
import MainNav from './MainNav';

function Sidebar() {
  return (
    <aside className="relative row-span-full flex flex-col gap-[3.2rem] overflow-hidden border-r border-background-200 bg-background-100 px-[2rem] py-[3.2rem]">
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
