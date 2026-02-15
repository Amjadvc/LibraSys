function SegmentedRadioGroup({ name, value, onChange, options }) {
  return (
    <div className="flex gap-4">
      {options.map((option) => {
        const isChecked = value === option.value;

        return (
          <label
            key={option.value}
            className={`w-1/2 cursor-pointer rounded-lg border px-[0.5rem] py-3 font-semibold transition xl:px-4 ${
              isChecked
                ? option.activeClass
                : 'border-background-200 bg-background-50 text-text-700 hover:bg-background-100'
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={isChecked}
              onChange={() => onChange(option.value)}
              className="sr-only"
            />

            <div className="flex flex-col items-center justify-center gap-2 text-[13px] xl:flex-row xl:gap-3">
              {option.icon && <option.icon className="text-xl" />}
              <span>{option.label}</span>
            </div>
          </label>
        );
      })}
    </div>
  );
}

export default SegmentedRadioGroup;
