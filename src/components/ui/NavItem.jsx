import { NavLink } from 'react-router-dom';

function NavItem({ to, onClick, children }) {
  return (
    <li className="mr-[10px]">
      <NavLink
        to={to}
        onClick={onClick}
        className="group flex w-full items-center gap-3 rounded-md px-[24px] py-[12px] text-text-600 transition-all duration-300 aria-[current=page]:bg-background-200 aria-[current=page]:text-text-800 aria-[current=page]:before:left-0 aria-[current=page]:before:top-1/2 aria-[current=page]:before:h-6 aria-[current=page]:before:w-1 aria-[current=page]:before:rounded-r aria-[current=page]:before:bg-accent-500 hover:bg-background-200 hover:text-text-800"
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem;
