function InputWraber() {
  return (
    <div className="input-wraber flex w-full flex-col justify-center">
      <div className="input-container relative flex h-[45px] w-full items-center justify-center rounded-[20px] border border-transparent bg-white p-2 transition focus-within:border-[#363062] focus-within:ring-2 focus-within:ring-[#363062]/30">
        <img
          src="user-email.svg"
          alt=" user email"
          className="absolute left-3 top-1/2 -translate-y-1/2"
        />
        <input
          type="text"
          className="w-full border-none pl-7 text-[#363062] outline-none"
          placeholder="Enter your email"
        />
      </div>
      <span className="error mt-1 pl-2 text-sm text-red-500">erroror</span>
    </div>
  );
}

export default InputWraber;
