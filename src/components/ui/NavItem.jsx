import { NavLink } from "react-router-dom";

function NavItem({ to, onClick, children }) {
  const NavLinkStyle = `group flex w-full items-center gap-3 rounded-md px-[24px] py-[12px] text-gray-600 transition-all duration-300 hover:bg-[#f1efe9] hover:text-brand aria-[current=page]:bg-[#f1efe9] aria-[current=page]:text-brand`;

  return (
    <li>
      <NavLink to={to} onClick={onClick} className={NavLinkStyle}>
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem;
