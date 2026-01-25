function Button({ children, onClick, classes }) {
  return (
    <button
      onClick={onClick}
      className={`flex h-[45px] min-w-[140px] items-center justify-center rounded-[16px] border-none bg-brand text-[20px] font-bold text-white outline-none ${classes}`}
    >
      {children}
    </button>
  );
}

export default Button;
