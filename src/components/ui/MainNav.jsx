import { useState } from 'react';
import {
  HiOutlineBookOpen,
  HiOutlineClipboardList,
  HiOutlineHome,
  HiOutlineSwitchHorizontal,
  HiOutlineUsers,
} from 'react-icons/hi';
import NavItem from './NavItem';
import DropdownNavItem from './DropdownNavItem';
import { HiOutlineArchiveBox } from 'react-icons/hi2';
import { IoSettingsOutline } from 'react-icons/io5';

function MainNav() {
  const [openMenu, setOpenMenu] = useState(null);

  function closeAllMenus() {
    setOpenMenu(null);
  }

  const iconStyle = `h-[20px] w-[20px] text-text-500 transition-all duration-300 group-hover:text-text-700 group-aria-[current=page]:text-primary-700 `;

  return (
    <nav>
      <ul className="flex flex-col gap-3">
        <NavItem to="/dashboard" onClick={closeAllMenus}>
          <HiOutlineHome className={iconStyle} />
          <span className="text-[16px] font-medium">Home</span>
        </NavItem>

        <DropdownNavItem
          to="/books"
          icon={HiOutlineBookOpen}
          label="Books"
          closeAllMenus={closeAllMenus}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          items={[
            { to: '/books', label: 'All Books' },
            { to: '/books/categories', label: 'Categories' },
            { to: '/books/authors', label: 'Authors' },
          ]}
        />
        <NavItem to="/inventory" onClick={closeAllMenus}>
          <HiOutlineArchiveBox className={iconStyle} />
          <span className="text-[16px] font-medium">Inventory</span>
        </NavItem>

        <DropdownNavItem
          to="/transactions"
          icon={HiOutlineSwitchHorizontal}
          label="Transactions"
          closeAllMenus={closeAllMenus}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          items={[
            { to: '/transactions', label: 'Delivery' },
            { to: '/transactions/returns', label: 'Returns' },
            { to: '/transactions/terminate', label: 'Terminate' },
          ]}
        />

        <NavItem to="/book-requests" onClick={closeAllMenus}>
          <HiOutlineClipboardList className={iconStyle} />
          <span className="text-[16px] font-medium">Book Requests</span>
        </NavItem>

        <NavItem to="/users" onClick={closeAllMenus}>
          <HiOutlineUsers className={iconStyle} />
          <span className="text-[16px] font-medium">Users</span>
        </NavItem>

        <NavItem to="/settings" onClick={closeAllMenus}>
          <IoSettingsOutline className={iconStyle} />
          <span className="text-[16px] font-medium">Settings</span>
        </NavItem>
      </ul>
    </nav>
  );
}

export default MainNav;
