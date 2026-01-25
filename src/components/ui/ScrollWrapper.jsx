function ScrollWrapper({ children }) {
  return (
    <div className="relative w-full overflow-x-auto scroll-smooth scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-red-300">
      {children}
    </div>
  );
}

export default ScrollWrapper;
