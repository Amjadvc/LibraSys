function Empty({ resourceName }) {
  return (
    // <div className="flex flex-col items-center justify-center px-4 py-12 text-center">
    <div className="dark:bg-background-900/50 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-primary-200 bg-background-50 px-4 py-12 text-center dark:border-primary-800">
      {/* Card catalog drawer */}
      <div className="relative mb-4 h-24 w-24">
        {/* Drawer */}
        <div className="absolute inset-0 rounded-lg border-2 border-primary-300 bg-background-100 p-2 dark:border-primary-700 dark:bg-background-800">
          {/* Drawer handle */}
          <div className="absolute left-1/2 top-1/2 h-2 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-400 dark:bg-accent-600" />

          {/* Empty card slots */}
          <div className="mt-6 space-y-1">
            <div className="h-1 w-full rounded-full bg-primary-200 dark:bg-primary-700" />
            <div className="h-1 w-3/4 rounded-full bg-primary-200 dark:bg-primary-700" />
            <div className="h-1 w-1/2 rounded-full bg-primary-200 dark:bg-primary-700" />
          </div>
        </div>

        {/* "Empty" stamp */}
        <div className="absolute -right-2 -top-2 rotate-12 transform">
          <div className="border-accent-500/30 bg-accent-500/10 rounded border px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-accent-600 dark:text-accent-400">
            Empty
          </div>
        </div>
      </div>

      <h3 className="mb-2 text-lg font-medium text-primary-700 dark:text-primary-300">
        No {resourceName} Found
      </h3>
      <p className="max-w-sm text-sm text-secondary-600 dark:text-secondary-400">
        There are no {resourceName?.toLowerCase()} to display at the moment.
      </p>
    </div>
  );
}

export default Empty;
