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
