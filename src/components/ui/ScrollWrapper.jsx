function ScrollWrapper({ children }) {
  return (
    <div className="relative w-full overflow-x-auto scroll-smooth scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-[#363062]">
      {children}
    </div>
  );
}

export default ScrollWrapper;
