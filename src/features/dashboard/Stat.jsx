function Stat({ title, value, icon: Icon, color }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-background-200 bg-background-100 p-6 shadow-sm">
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h3 className="mt-1 text-2xl font-bold text-slate-800">{value}</h3>
      </div>
      <div className={`rounded-lg p-3 ${color} bg-opacity-10`}>
        <Icon size={24} />
      </div>
    </div>
  );
}

export default Stat;
