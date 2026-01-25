import {
  HiArrowRightOnRectangle,
  HiOutlineSun,
  HiOutlineUser,
} from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";

function HeaderMenu() {
  return (
    <ul className="flex gap-1">
      <li>
        <ButtonIcon>
          <HiOutlineUser className="h-[26px] w-[26px] text-brand" />
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon>
          <HiOutlineSun className="h-[26px] w-[26px] text-brand" />
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon>
          <HiArrowRightOnRectangle className="h-[26px] w-[26px] text-brand" />
        </ButtonIcon>
      </li>
    </ul>
  );
}

export default HeaderMenu;
