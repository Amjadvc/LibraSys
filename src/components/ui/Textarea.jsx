function Textarea({ rows = 4, className = '', ...props }) {
  const baseClasses = `
    w-full
    resize-none
    rounded-[8px]
    border border-background-300
    bg-background-50
    p-3
    text-sm text-text-800
    shadow-sm
    outline-none
    transition-all
    focus:ring-2 focus:ring-primary-400
    focus:border-primary-500
  `;

  return (
    <textarea
      rows={rows}
      className={`${baseClasses} ${className}`}
      {...props}
    />
  );
}

export default Textarea;
