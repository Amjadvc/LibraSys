function StatusBadge({ status }) {
  let styles = 'bg-background-200 text-text-700';
  let showDot = false;

  switch (status) {
    //Book statuses
    case 'available':
      styles = 'bg-accent-500 text-white';
      break;

    case 'borrowed':
      styles = 'bg-secondary-500 text-white';
      break;

    case 'unavailable':
      styles = 'bg-gray-200 text-gray-600';
      break;

    //Transaction statuses
    case 'reserved':
      styles = 'bg-yellow-100 text-yellow-700 border border-yellow-200';
      break;

    case 'collected':
      styles = 'bg-green-100 text-green-700 border border-green-200';
      break;

    case 'returned':
      styles = 'bg-blue-100 text-blue-700';
      break;

    case 'paid':
      styles = 'bg-orange-100 text-orange-700 border border-orange-200';
      break;

    case 'terminated':
      styles = 'bg-red-100 text-red-700';
      break;

    //book request statuses
    case 'new':
      styles = 'bg-blue-100 text-blue-600';
      showDot = true;
      break;

    case 'read':
      styles = 'bg-yellow-100 text-yellow-600';
      break;

    case 'processed':
      styles = 'bg-green-100 text-green-600';
      break;

    case 'rejected':
      styles = 'bg-red-100 text-red-600';
      break;

    default:
      styles = 'bg-gray-100 text-gray-600';
  }

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${styles} capitalize`}
    >
      {showDot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00a6f4] opacity-75"></span>
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00a6f4]"></span>
        </span>
      )}
      {status}
    </span>
  );
}

export default StatusBadge;
