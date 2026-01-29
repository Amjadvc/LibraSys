import { createContext, useContext, useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const MenuesContext = createContext();

export function Menus({ children }) {
  const [openId, setOpenId] = useState(null);

  const close = () => setOpenId(null);
  const open = (id) => setOpenId(id);
  return (
    <MenuesContext.Provider value={{ close, open, openId }}>
      {children}
    </MenuesContext.Provider>
  );
}

export function Menu({ children }) {
  return (
    <div className="relative flex items-center justify-end">{children} </div>
  );
}

export function Toggle({ id }) {
  const { close, open, openId } = useContext(MenuesContext);

  function handleClick(e) {
    e.stopPropagation();
    openId === "" || openId !== id ? open(id) : close();
  }
  return (
    <button
      onClick={handleClick}
      className="translate-x-2 rounded-sm p-1 transition-all duration-200 hover:bg-gray-100"
    >
      <HiEllipsisVertical className="h-6 w-6 text-gray-700" />
    </button>
  );
}

export function List({ id, children }) {
  const { openId, close } = useContext(MenuesContext);
  const ref = useOutsideClick(close, false);
  if (openId !== id) return null;

  return (
    <ul
      ref={ref}
      className="absolute right-0 top-10 z-10 m-0 list-none overflow-hidden rounded-md bg-gray-50 p-0 shadow-md"
    >
      {children}
    </ul>
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenuesContext);

  function handleClicks() {
    onClick?.();
    close();
  }
  return (
    <li>
      <button
        onClick={handleClicks}
        className="flex w-full min-w-[187px] items-center gap-4 border-0 bg-transparent px-10 py-4 text-left text-[14px] text-[#424242] transition-all duration-200 hover:bg-[#e4e4e4]"
      >
        <span>{icon}</span>
        {children && <span>{children}</span>}
      </button>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;
