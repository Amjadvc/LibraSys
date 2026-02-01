function FormRow({ children, label, error, type, row, customeClasses }) {
  const baseClasses = `
    py-4
    first:pt-0 last:pb-0
    last:border-b-0
    border-b border-background-200
    dark:border-background-700
    max-[992px]:grid-cols-1 max-[992px]:gap-4
  `;

  const typeClasses = {
    bookFormStyle: `
      grid items-center gap-6
      grid-cols-[130px_260px_1fr]
      min-[993px]:max-[1200px]:grid-cols-[150px_230px_1fr]
    `,
    createBookFormStyle: `
      grid items-center gap-6
      grid-cols-[200px_1fr_1fr]
      min-[993px]:max-[1200px]:grid-cols-[150px_230px_1fr]
    `,
  };

  const rowClasses =
    row === 'one'
      ? 'max-[992px]:grid-cols-[15rem_1fr] max-[992px]:grid-rows-1'
      : '';

  return (
    <div
      className={` ${baseClasses} ${typeClasses[type] || typeClasses.default} ${rowClasses} ${customeClasses}`}
    >
      {label && (
        <label
          htmlFor={children.props.id}
          className="text-[14px] font-medium text-text-600 dark:text-text-300"
        >
          {label}
        </label>
      )}

      {children}

      {error && <span className="text-sm text-red-700">{error}</span>}
    </div>
  );
}

export default FormRow;
