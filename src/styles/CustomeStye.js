export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: 44,
    borderRadius: 8,
    border: `1px solid var(--background-300)`,
    backgroundColor: `var(--background-50)`,
    padding: '0 12px',
    boxShadow: state.isFocused
      ? `0 0 0 2px var(--primary-400)`
      : `0 1px 2px rgba(0,0,0,0.05)`,
    '&:hover': {
      borderColor: 'var(--primary-500)',
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: 14,
    color: 'var(--text-700)',
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: 'var(--primary-100)',
    borderRadius: 6,
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: 'var(--primary-700)',
    fontSize: 13,
    fontWeight: 500,
    padding: '4px 6px',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'var(--text-400)',
    fontSize: 14,
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999,
    borderRadius: 8,
    overflow: 'hidden',
    // maxHeight: '150px',
    backgroundColor: 'var(--background-50)',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? 'var(--primary-50)'
      : 'var(--background-50)',
    color: 'var(--text-700)',
    fontSize: 14,
    cursor: 'pointer',
  }),
};
