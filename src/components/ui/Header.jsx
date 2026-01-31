import HeaderMenu from './HeaderMenu';

function Header() {
  return (
    <header className="bg-background-50 border-background-200 flex items-center justify-end border-b px-12 py-3 shadow-sm">
      <div className="flex items-center gap-6">
        <div className="text-text-700 flex items-center gap-3 text-[14px] font-medium">
          <img
            src="/default-user.jpg"
            alt="user avatar"
            className="border-background-200 block w-9 rounded-full border object-cover"
          />
          <span>test</span>
        </div>

        <HeaderMenu />
      </div>
    </header>
  );
}

export default Header;
