import Logo from './Logo';
import MainNav from './MainNav';

function Sidebar() {
  return (
    <aside className="border-background-200 bg-background-100 relative row-span-full flex flex-col gap-[3.2rem] overflow-hidden border-r px-[2.4rem] py-[3.2rem]">
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
