export default function FileInput({ disabled, ...props }) {
  return (
    <input
      type="file"
      disabled={disabled}
      className={`file:font-inherit overflow-hidden text-[14px] text-brand file:mr-3 file:cursor-pointer file:rounded-[0.5rem] file:border-0 file:bg-[#4b4490] file:px-3 file:py-2 file:font-medium file:text-white file:transition-colors file:hover:bg-brand disabled:cursor-not-allowed disabled:file:bg-gray-400 disabled:file:text-gray-200`}
      {...props}
    />
  );
}
