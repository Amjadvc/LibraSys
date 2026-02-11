function Stat({ title, value, icon: Icon, color }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-background-200 bg-background-100 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-background-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-none">
      <div>
        <p className="text-sm font-medium text-slate-500 dark:text-text-700">
          {title}
        </p>
        <h3 className="mt-1 text-2xl font-bold text-text-800 dark:text-text-900">
          {value}
        </h3>
      </div>
      <div className={`rounded-lg p-3 ${color} bg-opacity-10`}>
        <Icon size={22} />
      </div>
    </div>
  );
}

export default Stat;
