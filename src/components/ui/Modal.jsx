import { cloneElement } from "react";
import { createContext, useContext, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

export const ModalContext = createContext();

const baseModalClasses = `
  fixed left-1/2 top-1/2
  -translate-x-1/2 -translate-y-1/2
  overflow-y-auto
  rounded-2xl bg-white shadow-lg
  transition-all duration-500
`;

const modalVariants = {
  select: "max-w-[500px] w-[95%] overflow-y-visible px-12 py-8",
  form: "w-[92%] lg:max-w-[800px] px-12 py-8 ",
};

function CloseButton({ onClick, colorClass = "text-gray-500" }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-5 top-3 translate-x-3 rounded-sm p-1 transition-all duration-200 hover:bg-gray-100"
    >
      <HiXMark className={`h-6 w-6 ${colorClass}`} />
    </button>
  );
}

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

// create the children elements
function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name, type }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  const iconColor = type === "form" ? "text-brand" : "text-gray-500";

  if (name !== openName) return null;
  return createPortal(
    <div className="fixed left-0 top-0 z-50 h-screen w-full bg-[#fff0] backdrop-blur-[4px] transition-all duration-500">
      <div
        ref={ref}
        className={`${baseModalClasses} ${modalVariants[type] || ""}`}
      >
        <CloseButton onClick={close} colorClass={iconColor} />
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
