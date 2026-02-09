const baseStyles = 'flex items-center justify-center outline-none transition';

const variants = {
  primary:
    'h-[45px] min-w-[140px] rounded-[20px]  text-[20px] font-semibold text-white',

  secondary:
    'h-[45px] min-w-[140px] gap-2 rounded-[8px]  text-[18px] font-semibold',

  third: `
    rounded-[8px]
    border border-primary-500
    text-primary-600
    hover:bg-primary-100
    hover:border-primary-600
    px-5 py-2
    text-[16px]
    font-medium
    transition-colors
  `,

  danger:
    'rounded-[8px] bg-red-600 hover:bg-red-700 px-5 py-2 text-[16px] font-medium text-white',

  formbutton:
    'rounded-[8px] bg-primary-500 hover:bg-primary-600 px-6 py-2 text-[16px] font-medium text-text-50 dark:text-white transition-colors',

  delivery: `inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold transition border border-primary-200 bg-primary-500 text-white shadow-sm shadow-primary-300/40 hover:bg-primary-600 `,
  collected: `inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold transition cursor-not-allowed border border-background-200 bg-background-100 text-text-400`,
  return: `
    inline-flex
    items-center
    justify-center
    rounded-full
    px-4
    py-2
    text-xs
    font-semibold
    transition-all
    duration-200
    border
    border-green-200
    bg-green-500
    text-white
    shadow-sm
    shadow-green-300/40
    hover:bg-green-600
    hover:shadow-md
    hover:border-green-300
    active:bg-green-700
    active:scale-95
    disabled:cursor-not-allowed
    disabled:opacity-50
    disabled:hover:bg-green-500
    disabled:hover:shadow-sm
    disabled:active:scale-100
  `,

  // NEW: Add these variants for quantity buttons
  quantity: `
    h-9 w-[100px]
    rounded-lg
    bg-primary-500
    text-white
    text-lg
    font-medium
    transition-all
    duration-200
    hover:bg-primary-600
    hover:shadow-md
    active:scale-95
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:hover:bg-primary-500
    disabled:hover:shadow-none
    disabled:active:scale-100
  `,

  payment: `
    flex-1
    rounded-xl
    border-2
    p-4
    transition-all
    duration-200
    flex
    items-center
    justify-center
    gap-3
  `,
};

function Button({
  children,
  onClick,
  variant = 'primary',
  customStyle = '',
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${customStyle}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
