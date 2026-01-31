import {
  HiArrowRightOnRectangle,
  HiOutlineSun,
  HiOutlineUser,
} from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import DarkModeToggle from "./DarkModeToggle";

function HeaderMenu() {
  return (
    <ul className="flex gap-1">
      <li>
        <ButtonIcon>
          <HiOutlineUser className="text-brand h-[26px] w-[26px]" />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <ButtonIcon>
          <HiArrowRightOnRectangle className="text-brand h-[26px] w-[26px]" />
        </ButtonIcon>
      </li>
    </ul>
  );
}

export default HeaderMenu;
