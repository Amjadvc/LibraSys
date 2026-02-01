function Input({ type = 'text', isDarkMode, className = '', ...props }) {
  const baseClasses = `
  h-[40px]
  rounded-[8px]
  border border-background-300
  bg-background-50
  px-3 py-2
  text-[14px]
  text-text-700
  shadow-sm
  outline-none
  transition-all
  focus:ring-2 focus:ring-primary-400
  focus:border-primary-500
  dark:bg-background-900
  dark:border-background-700
  dark:text-text-100
  dark:focus:ring-primary-600
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
