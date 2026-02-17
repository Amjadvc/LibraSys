import { cloneElement } from 'react';
import { createContext, useContext, useState } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';

export const ModalContext = createContext();

const baseModalClasses = `
  fixed left-1/2 top-1/2
  -translate-x-1/2 -translate-y-1/2
  max-h-[calc(100vh-50px)]
  text-text-700
  rounded-2xl bg-background-50 dark:bg-background-100 shadow-lg
  transition-all duration-500
  overflow-y-auto
  scrollbar-thin
  scrollbar-track-background-100
  scrollbar-thumb-accent-500
`;

const modalVariants = {
  select: 'max-w-[500px] w-[95%] overflow-y-visible px-9 sm:px-12 py-8',
  selectTerminate:
    'max-w-[555px] w-[92%] overflow-y-visible px-8 sm:px-12 py-8',
  form: 'w-[92%] lg:max-w-[850px] px-1 py-1 sm:px-12 sm:py-8 ', //book
  smallForm:
    'w-[92%] max-w-[450px]  px-1 py-1 sm:px-12 sm:py-6 overflow-y-visible', //category //autheor
  reviewRequest: 'w-[92%] max-w-[550px] px-8 sm:px-12 py-6', //category //autheor
};

function CloseButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-5 top-3 translate-x-3 rounded-sm p-1 transition-all duration-200 hover:bg-accent-100 hover:text-white"
    >
      <HiXMark className={`h-6 w-6 text-gray-500`} />
    </button>
  );
}

function Modal({ children }) {
  const [openName, setOpenName] = useState('');
  const close = () => setOpenName('');
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

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed left-0 top-0 z-50 h-screen w-full bg-[#00000080] backdrop-blur-sm transition-all duration-500">
      <div
        ref={ref}
        className={`${baseModalClasses} ${modalVariants[type] || ''}`}
      >
        <CloseButton onClick={close} />
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
