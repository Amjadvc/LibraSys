import { NavLink } from 'react-router-dom';

function NavItem({ to, onClick, children }) {
  return (
    <li>
      <NavLink
        to={to}
        onClick={onClick}
        className="text-text-600 hover:text-text-800 aria-[current=page]:text-text-800 aria-[current=page]:bg-background-200 hover:bg-background-200 aria-[current=page]:before:bg-accent-500 group flex w-full items-center gap-3 rounded-md px-[24px] py-[12px] transition-all duration-300 aria-[current=page]:before:left-0 aria-[current=page]:before:top-1/2 aria-[current=page]:before:h-6 aria-[current=page]:before:w-1 aria-[current=page]:before:rounded-r"
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem;
