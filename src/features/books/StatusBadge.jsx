// // Helper function to style status
// function StatusBadge({ status }) {
//   const color =
//     status === 'available'
//       ? 'bg-accent-500 text-white'
//       : status === 'borrowed'
//         ? 'bg-secondary-500 text-white'
//         : 'bg-background-100 text-white';
//   return (
//     <span
//       className={`rounded-full px-2 py-1 text-sm font-medium ${color} w-max`}
//     >
//       {status}
//     </span>
//   );
// }

// export default StatusBadge;

function StatusBadge({ status }) {
  let styles = 'bg-background-200 text-text-700';

  switch (status) {
    // 📚 Book statuses
    case 'available':
      styles = 'bg-accent-500 text-white';
      break;

    case 'borrowed':
      styles = 'bg-secondary-500 text-white';
      break;

    case 'unavailable':
      styles = 'bg-gray-200 text-gray-600';
      break;

    // 🔄 Transaction statuses
    case 'reserved':
      styles = 'bg-yellow-100 text-yellow-700';
      break;

    case 'collected':
      styles = 'bg-green-100 text-green-700';
      break;

    case 'returned':
      styles = 'bg-blue-100 text-blue-700';
      break;

    case 'paid':
      styles = 'bg-purple-100 text-purple-700';
      break;

    case 'terminated':
      styles = 'bg-red-100 text-red-700';
      break;

    default:
      styles = 'bg-gray-100 text-gray-600';
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-sm font-semibold capitalize ${styles}`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;
