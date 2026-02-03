function ScrollWrapper({ children }) {
  return (
    <div className="relative w-full overflow-x-auto scroll-smooth scrollbar-thin scrollbar-track-background-100 scrollbar-thumb-accent-500 dark:scrollbar-track-background-800 dark:scrollbar-thumb-accent-300">
      {children}
    </div>
  );
}

export default ScrollWrapper;
