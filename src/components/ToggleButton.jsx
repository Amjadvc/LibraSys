function ToggleButton({ children, onClick, customStyle }) {
  return (
    <button
      onClick={onClick}
      className={`${customStyle} cursor-pointer rounded-md border-none p-[6px] text-text-600 outline-none hover:text-text-800 md:hidden`}
    >
      {children}
    </button>
  );
}

export default ToggleButton;
