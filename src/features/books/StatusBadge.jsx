// Helper function to style status
function StatusBadge({ status }) {
  const color =
    status === 'available'
      ? 'bg-accent-500 text-white'
      : status === 'borrowed'
        ? 'bg-secondary-500 text-white'
        : 'bg-background-100 text-white';
  return (
    <span
      className={`rounded-full px-2 py-1 text-sm font-medium ${color} w-max`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;
