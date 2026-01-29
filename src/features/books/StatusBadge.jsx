// Helper function to style status
function StatusBadge({ status }) {
  const color =
    status === "available"
      ? "bg-green-100 text-green-800"
      : status === "borrowed"
        ? "bg-red-100 text-red-800"
        : "bg-gray-100 text-gray-800";
  return (
    <span
      className={`rounded-full px-2 py-1 text-sm font-medium ${color} w-max`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;
