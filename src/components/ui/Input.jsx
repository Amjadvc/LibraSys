function Input({ type = "text", isDarkMode, className = "", ...props }) {
  const baseClasses = `
    border border-gray-300
    bg-white
    rounded-[8px]
    px-3 py-2
    shadow-sm
    outline-none
    text-[14px]
    text-[#363062]
    focus-within:ring-2 focus-within:ring-[#7772ab]
  `;

  const dateClasses =
    type === "date"
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
      : "";

  return (
    <input
      type={type}
      className={`${baseClasses} ${dateClasses} ${className}`}
      {...props}
    />
  );
}

export default Input;
