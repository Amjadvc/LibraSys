function ChartBox({ children }) {
  return (
    <div className="char-box rounded-xl border border-background-200 bg-background-100 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none">
      {children}
    </div>
  );
}

export default ChartBox;
