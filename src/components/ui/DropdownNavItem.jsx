import { HiChevronRight } from "react-icons/hi";
import { VscDash } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const NavLinkStyle = `group flex w-full items-center gap-3 rounded-md px-[24px] py-[12px] text-gray-600 transition-all duration-300 hover:bg-[#f1efe9] hover:text-brand aria-[current=page]:bg-[#f1efe9] aria-[current=page]:text-brand`;
const InnerLinkStyle = `group flex w-full items-center gap-[10px] rounded-md px-[24px] py-[4px] text-gray-600 hover:text-brand transition-all duration-300  aria-[current=page]:text-brand`;
const iconStyle = `h-[20px] w-[20px] text-gray-400 transition-all duration-300 group-hover:text-brand group-aria-[current=page]:text-brand`;

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
          <Icon className={iconStyle} />
          <span className="flex items-center gap-[5px] text-[17px] font-medium">
            {label}
            <HiChevronRight
              className="h-full w-6 transition-transform duration-300 ease-in-out"
              style={{
                transform:
                  openMenu === label ? "rotate(90deg)" : "rotate(0deg)",
              }}
            />
          </span>
        </NavLink>
      </button>
      <ul
        className={`flex flex-col justify-center gap-3 overflow-hidden transition-transform duration-300 ease-in-out ${openMenu === label ? "max-h-[200px] pb-0 pt-[14px]" : "max-h-0 p-0"}`}
      >
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink to={item.to} end className={InnerLinkStyle}>
                <VscDash className={iconStyle} />
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
