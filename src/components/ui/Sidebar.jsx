import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside className="relative row-span-full flex flex-col gap-[3.2rem] overflow-hidden rounded-br-[10px] rounded-tr-[10px] border-r border-border bg-[#e2d7c8] px-[2.4rem] py-[3.2rem]">
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
