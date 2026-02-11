export const books = [
  {
    id: 1,
    title: 'Clean Code',
    categoryId: 3,
    status: 'borrowed',
    createdAt: '2026-01-10',
  },
  {
    id: 2,
    title: 'Atomic Habits',
    categoryId: 1,
    status: 'available',
    createdAt: '2026-01-12',
  },
  {
    id: 3,
    title: 'Introduction to Algorithms',
    categoryId: 4,
    status: 'borrowed',
    createdAt: '2026-01-15',
  },
  {
    id: 4,
    title: 'The Great Gatsby',
    categoryId: 1,
    status: 'overdue',
    createdAt: '2026-01-16',
  },
];

export const members = [
  { id: 1, name: 'John Doe', active: true },
  { id: 2, name: 'Jane Smith', active: true },
  { id: 3, name: 'Mike Johnson', active: false },
];

export const categories = [
  { id: 1, name: 'Fiction' },
  { id: 2, name: 'Science' },
  { id: 3, name: 'Technology' },
  { id: 4, name: 'Programming' },
];
