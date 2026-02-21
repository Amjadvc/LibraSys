const baseStyles =
  'flex items-center justify-center outline-none transition  disabled:cursor-not-allowed disabled:opacity-50';

const transaction = `
  inline-flex items-center justify-center
  rounded-full px-4 py-2 text-xs font-semibold text-white
  transition-all duration-200
  border shadow-sm
  hover:shadow-md
  active:scale-95
  disabled:cursor-not-allowed disabled:opacity-50
  disabled:hover:shadow-sm disabled:active:scale-100
`;

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
    'rounded-[8px] min-w-[89px] bg-red-600 hover:bg-red-700 px-5 py-2 text-[16px] font-medium text-white',

  formbutton:
    'rounded-[8px] bg-primary-500 hover:bg-primary-600 px-6 py-2 text-[16px] font-medium text-white transition-colors',

  collected: `inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold transition cursor-not-allowed border border-background-200 bg-background-100 text-text-400`,

  delivery: `${transaction}
  bg-primary-500  border-white/40 hover:border-white/60
  shadow-blue-300/40 hover:shadow-blue-300/60 hover:bg-primary-600
  active:bg-primary-700
`,

  return: `${transaction}
  bg-green-500 border-green-200 hover:bg-green-600 hover:border-green-300
  shadow-green-300/40 hover:shadow-green-300/60
  active:bg-green-700
`,

  terminate: `${transaction}
  bg-red-600 border-red-200 hover:bg-red-700 hover:border-red-300
  shadow-red-300/40 hover:shadow-red-300/60
  active:bg-red-800
`,

  confirmReturn: `
  rounded-[8px]
  bg-green-600
  hover:bg-green-700
  px-6 py-2
  text-[16px]
  font-medium
  text-white
  w-1/2
`,
  confirmTerminate: `
  rounded-[8px]
  bg-red-600 hover:bg-red-700
  px-6 py-2
  text-[16px]
  font-medium
  text-white
  w-1/2
`,

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

  review: `
    inline-flex h-8 items-center justify-center rounded-full border px-3 text-[11px] font-medium md:text-xs border-violet-500 bg-violet-600 text-white
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
