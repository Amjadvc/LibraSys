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
  const { open, openId, close } = useContext(MenuesContext);
  function handleClick() {
    id === openId ? close() : open(id);
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
      className="absolute right-0 top-10 z-10 m-0 list-none rounded-md bg-white p-0 shadow-md"
    >
      {children}
    </ul>
  );
}
