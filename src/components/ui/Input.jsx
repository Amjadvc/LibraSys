function Input({ type = 'text', isDarkMode, className = '', ...props }) {
  const baseClasses = `
  h-[40px]
  rounded-[8px]
  border border-background-300
  bg-background-50
  px-3 py-2
  text-[14px]
  text-text-800
  shadow-sm
  outline-none
  transition-all
  focus:ring-2 focus:ring-primary-400
  focus:border-primary-500
  dark:text-text-900
  disabled:cursor-not-allowed
  disabled:opacity-70
  disabled:bg-background-200
  disabled:text-text-800
  disabled:border-background-300
  dark:disabled:bg-background-300
  `;

  const dateClasses =
    type === 'date'
      ? `
        bg-no-repeat
        bg-[length:20px]
        bg-[position:96%_center]
        cursor-pointer
        ${
          isDarkMode
            ? "bg-[url('/date-input-dark.svg')]"
            : "bg-[url('/date-input-light.svg')]"
        }
      `
      : '';

  return (
    <input
      type={type}
      className={`${baseClasses} ${dateClasses} ${className}`}
      {...props}
    />
  );
}

export default Input;
