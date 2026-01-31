function ButtonIcon({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-text-600 hover:bg-background-100 hover:text-text-800 focus:ring-accent-200 rounded-md p-[6px] transition-all duration-200 focus:outline-none focus:ring-2"
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
