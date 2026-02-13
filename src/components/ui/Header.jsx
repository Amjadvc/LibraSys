import HeaderMenu from './HeaderMenu';

function Header() {
  return (
    <header className="flex items-center justify-end border-b border-background-200 bg-background-50 px-12 py-3 shadow-sm">
      <div className="flex items-center gap-6">
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
