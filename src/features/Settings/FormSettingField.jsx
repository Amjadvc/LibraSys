function FormSettingField({ label, hint, children }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-text-700 dark:text-text-800">
        {label}
      </label>

      {children}

      {hint && (
        <p className="mt-2 text-xs text-text-400 dark:text-text-600">{hint}</p>
      )}
    </div>
  );
}

export default FormSettingField;
