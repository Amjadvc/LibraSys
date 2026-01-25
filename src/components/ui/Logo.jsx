function Logo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src="/logo.png" alt="logo" className="h-[4rem] w-auto" />
      <h2 className="-mt-[5px] font-logo text-[24px] text-brand">
        Inspiration Library
      </h2>
    </div>
  );
}

export default Logo;
