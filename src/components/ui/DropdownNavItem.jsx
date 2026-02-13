import { HiChevronRight } from 'react-icons/hi';
import { VscCircleFilled } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';

const NavLinkStyle =
  'sm:mr-[10px] text-text-600 hover:text-text-800 aria-[current=page]:text-text-800 aria-[current=page]:bg-background-200 hover:bg-background-200 aria-[current=page]:before:bg-accent-500 group flex w-full items-center gap-3 rounded-md px-[24px] py-[12px] transition-all duration-300 aria-[current=page]:before:left-0 aria-[current=page]:before:top-1/2 aria-[current=page]:before:h-6 aria-[current=page]:before:w-1 aria-[current=page]:before:rounded-r ';
const InnerLinkStyle = `text-text-600 hover:text-text-800 aria-[current=page]:text-text-800 group flex w-full items-center gap-[10px] rounded-md px-[24px] py-[4px] transition-all duration-300 `;

const iconStyle = `
  h-5 w-5
  text-text-600
  transition-colors duration-200
  group-hover:text-text-800
  group-aria-[current=page]:text-primary-500
  dark:text-text-400
  dark:group-hover:text-primary-500
  dark:group-aria-[current=page]:text-primary-500
`;

function DropdownNavItem({
  to,
  icon: Icon,
  label,
  items = [],
  closeAllMenus,
  openMenu,
  setOpenMenu,
}) {
  return (
    <li>
      <button
        className="flex w-full cursor-pointer items-center border-none"
        onClick={() => setOpenMenu(openMenu === label ? null : label)}
      >
        <NavLink to={to} className={NavLinkStyle} onClick={closeAllMenus}>
          <div className="flex w-full items-center justify-between">
            <span className="flex items-center gap-3">
              <Icon className={iconStyle} />
              {label}
            </span>
            <span className="flex items-center text-[16px] font-medium">
              <HiChevronRight
                className="h-full w-4 transition-transform duration-300 ease-in-out"
                style={{
                  transform:
                    openMenu === label ? 'rotate(90deg)' : 'rotate(0deg)',
                }}
              />
            </span>
          </div>
        </NavLink>
      </button>
      <ul
        className={`flex flex-col justify-center gap-3 overflow-hidden transition-transform duration-300 ease-in-out ${openMenu === label ? 'max-h-[200px] pb-0 pt-[14px]' : 'max-h-0 p-0'}`}
      >
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink to={item.to} end className={InnerLinkStyle}>
                <VscCircleFilled className="h-[20px] w-[30px] text-text-500 transition-all duration-300 group-hover:text-accent-500 group-aria-[current=page]:text-accent-500" />
                <span className="text-[16px] font-medium">{item.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default DropdownNavItem;
