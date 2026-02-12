// ########################################--PieChart--########################################
export function getTopCategories(books, limit = 5) {
  // Group books by category and count occurrences
  const categoryMap = books.reduce((acc, book) => {
    if (!acc[book.category]) {
      acc[book.category] = { name: book.category, value: 0 };
    }

    acc[book.category].value += 1;
    return acc;
  }, {});

  // Convert to array and sort by highest count
  const sorted = Object.values(categoryMap).sort((a, b) => b.value - a.value);

  // Return top N categories
  return sorted.slice(0, limit);
}

// ########################################--BarChart--########################################
// Helper to get month name from date
const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export function getBorrowingTrends(transactions) {
  // Initialize months
  const months = Array.from({ length: 12 }, (_, i) => ({
    name: monthNames[i],
    borrowed: 0,
    returned: 0,
  }));

  transactions.forEach((tx) => {
    const createdDate = new Date(tx.createdAt);
    const monthIndex = createdDate.getMonth();

    if (tx.status === 'collected') {
      // Book taken by user
      months[monthIndex].borrowed += tx.quantity;
    } else if (tx.status === 'returned') {
      // Book returned to library
      months[monthIndex].returned += tx.quantity;
    }
  });

  //only keep months with activity
  return months.filter((m) => m.borrowed > 0 || m.returned > 0);
}
