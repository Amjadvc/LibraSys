function ScrollWrapper({ children }) {
  return (
    <div className="relative w-full overflow-auto scroll-smooth scrollbar-thin scrollbar-track-background-100 scrollbar-thumb-accent-500">
      {children}
    </div>
  );
}

export default ScrollWrapper;
