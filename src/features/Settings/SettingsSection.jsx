function SettingsSection({ icon: Icon, title, iconStyle, children }) {
  return (
    <section className="w-full rounded-2xl border border-background-200 bg-background-100 p-6 shadow-sm dark:border-background-300 lg:w-1/2">
      <div className="mb-6 flex items-center gap-3">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconStyle}`}
        >
          <Icon />
        </div>

        <h2 className="text-lg font-bold text-text-800 dark:text-text-900">
          {title}
        </h2>
      </div>

      <div className="space-y-6">{children}</div>
    </section>
  );
}

export default SettingsSection;
