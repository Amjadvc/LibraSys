const STATUS_CONFIG = {
  // Book statuses
  available: {
    styles: 'bg-accent-500 text-white',
  },
  borrowed: {
    styles: 'bg-secondary-500 text-white',
  },
  unavailable: {
    styles: 'bg-gray-200 text-gray-600',
  },

  // Transaction statuses
  reserved: {
    styles: 'bg-yellow-100 text-yellow-700 border border-yellow-200',
  },
  collected: {
    styles: 'bg-green-100 text-green-700 border border-green-200',
  },
  returned: {
    styles: 'bg-blue-100 text-blue-700',
  },
  paid: {
    styles: 'bg-orange-100 text-orange-700 border border-orange-200',
  },
  terminated: {
    styles: 'bg-red-100 text-red-700',
  },

  // Book request statuses
  new: {
    styles: 'bg-blue-100 text-blue-600',
    showDot: true,
  },
  read: {
    styles: 'bg-yellow-100 text-yellow-600',
  },
  processed: {
    styles: 'bg-green-100 text-green-600',
  },
  rejected: {
    styles: 'bg-red-100 text-red-600',
  },

  // User statuses
  active: {
    styles: `bg-green-100 text-green-700 w-fit`,
  },
  inactive: {
    styles: `bg-slate-100 text-slate-700 w-fit`,
  },
};

function StatusBadge({ status }) {
  const config = STATUS_CONFIG[status] || {
    styles: 'bg-gray-100 text-gray-600',
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${config.styles}`}
    >
      {config.showDot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00a6f4] opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00a6f4]" />
        </span>
      )}

      {status}
    </span>
  );
}

export default StatusBadge;
