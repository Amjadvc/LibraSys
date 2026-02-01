const baseStyles = 'flex items-center justify-center outline-none transition';

const variants = {
  primary:
    'h-[45px] min-w-[140px] rounded-[20px] bg-brand text-[20px] font-semibold text-white',

  secondary:
    'h-[45px] min-w-[140px] gap-2 rounded-[8px] bg-brand text-[18px] font-semibold text-white',

  // third:
  //   'rounded-[8px] border border-primary-500 text-primary-600 hover:bg-primary-100 hover:border-primary-600 dark:text-primary-400 dark:hover:bg-primary-800 px-5 py-2 text-[16px] font-medium transition-colors',
  third: `
    rounded-[8px]
    border border-primary-500
    text-primary-600
    hover:bg-primary-100
    hover:border-primary-600
    dark:text-primary-400
    dark:hover:bg-primary-800
    px-5 py-2
    text-[16px]
    font-medium
    transition-colors
  `,

  danger:
    'rounded-[8px] bg-red-600 hover:bg-red-700 px-5 py-2 text-[16px] font-medium text-white',

  formbutton:
    'rounded-[8px] bg-primary-500 hover:bg-primary-600 px-6 py-2 text-[16px] font-medium text-text-50 transition-colors',
};

function Button({ children, onClick, variant = 'primary' }) {
  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}

export default Button;
