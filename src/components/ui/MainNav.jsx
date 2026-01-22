import { useState } from "react";
import {
  HiOutlineBookOpen,
  HiOutlineClipboardList,
  HiOutlineHome,
  HiOutlineTag,
  HiOutlineUserGroup,
  HiOutlineUsers,
} from "react-icons/hi";
import NavItem from "./NavItem";
import DropdownNavItem from "./DropdownNavItem";

function MainNav() {
  const [openMenu, setOpenMenu] = useState(null);

  function closeAllMenus() {
    setOpenMenu(null);
  }

  const iconStyle = `h-[20px] w-[20px] text-gray-400 transition-all duration-300 group-hover:text-brand group-aria-[current=page]:text-brand`;

  return (
    <nav>
      <ul className="flex flex-col gap-3">
        <NavItem to="/dashboard" onClick={closeAllMenus}>
          <HiOutlineHome className={iconStyle} />
          <span className="text-[17px] font-medium">Home</span>
        </NavItem>

        <NavItem to="/book-requests" onClick={closeAllMenus}>
          <HiOutlineClipboardList className={iconStyle} />
          <span className="text-[17px] font-medium">Book Requests</span>
        </NavItem>

        <NavItem to="/users" onClick={closeAllMenus}>
          <HiOutlineUsers className={iconStyle} />
          <span className="text-[17px] font-medium">Users</span>
        </NavItem>

        <DropdownNavItem
          to="/books"
          icon={HiOutlineBookOpen}
          label="Books"
          closeAllMenus={closeAllMenus}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          items={[
            { to: "/books", label: "All books" },
            { to: "/books/new", label: "Add book" },
          ]}
        />

        <DropdownNavItem
          to="/authors"
          icon={HiOutlineUserGroup}
          label="Authors"
          closeAllMenus={closeAllMenus}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          items={[
            { to: "/authors", label: "All authors" },
            { to: "/authors/new", label: "Add author" },
          ]}
        />

        <DropdownNavItem
          to="/categories"
          icon={HiOutlineTag}
          label="Categories"
          closeAllMenus={closeAllMenus}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          items={[
            { to: "/categories", label: "All categories" },
            { to: "/categories/new", label: "Add categore" },
          ]}
        />
      </ul>
    </nav>
  );
}

export default MainNav;
