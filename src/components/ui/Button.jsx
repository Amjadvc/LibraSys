const baseStyles = "flex items-center justify-center outline-none transition";

const variants = {
  primary:
    "h-[45px] min-w-[140px] rounded-[20px] bg-brand text-[20px] font-semibold text-white",

  secondary:
    "h-[45px] min-w-[140px] gap-2 rounded-[8px] bg-brand text-[18px] font-semibold text-white",

  third:
    "rounded-[8px] border border-brand px-5 py-2 text-[16px] font-medium text-brand",

  danger:
    "rounded-[8px] bg-[#b91c1c] px-5 py-2 text-[16px] font-medium text-white",

  formbutton:
    "rounded-[8px] hover:bg-brand bg-[#4b4490] px-5 py-2 text-[16px] font-medium text-white",
};

function Button({ children, onClick, variant = "primary" }) {
  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}

export default Button;
