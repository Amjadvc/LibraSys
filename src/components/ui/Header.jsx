import HeaderMenu from "./HeaderMenu";

function Header() {
  return (
    <header className="flex items-center justify-end border-b border-border bg-[#fbfaf7] px-12 py-3">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 text-[14px] font-medium text-brand">
          <img
            src="/default-user.jpg"
            alt="user avatar"
            className="block w-9 rounded-full object-cover outline outline-1 outline-[#e5e7eb]"
          />
          <span>test</span>
        </div>

        <HeaderMenu />
      </div>
    </header>
  );
}

export default Header;
