function ButtonIcon({ children }) {
  return (
    <button className="rounded-md border-none bg-none p-[6px] transition-all duration-200 hover:bg-gray-100">
      {children}
    </button>
  );
}

export default ButtonIcon;
