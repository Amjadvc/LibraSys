import { NavLink } from "react-router-dom";

function NavItem({ to, onClick, children }) {
  return (
    <li>
      <NavLink
        to={to}
        onClick={onClick}
        className="bg-primary-100 hover:text-brand aria-[current=page]:text-brand aria-[current=page]:bg-primary-100 hover:bg-background-200 group flex w-full items-center gap-3 rounded-md px-[24px] py-[12px] text-gray-600 transition-all duration-300"
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem;
