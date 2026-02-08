export const transactions = [
  {
    id: 101,
    book: {
      id: 1,
      title: 'Clean Code',
      cover: 'https://picsum.photos/40/60?random=1',
    },
    customer: {
      id: 201,
      name: 'Ahmed Ali',
    },
    status: 'reserved', // reserved | collected
    quantity: 1,
    createdAt: '2026-02-01',
    dueDate: '2026-02-15',
  },
  {
    id: 102,
    book: {
      id: 2,
      title: 'The Pragmatic Programmer',
      cover: 'https://picsum.photos/40/60?random=2',
    },
    customer: {
      id: 202,
      name: 'Sara Hassan',
    },
    status: 'collected',
    quantity: 1,
    createdAt: '2026-01-28',
    dueDate: '2026-02-11',
  },
  {
    id: 103,
    book: {
      id: 3,
      title: 'Clean Architecture',
      cover: 'https://picsum.photos/40/60?random=3',
    },
    customer: {
      id: 203,
      name: 'Omar Khaled',
    },
    status: 'reserved',
    quantity: 2,
    createdAt: '2026-02-02',
    dueDate: '2026-02-16',
  },
  {
    id: 104,
    book: {
      id: 4,
      title: 'Refactoring',
      cover: 'https://picsum.photos/40/60?random=4',
    },
    customer: {
      id: 204,
      name: 'Lina Youssef',
    },
    status: 'collected',
    quantity: 1,
    createdAt: '2026-01-25',
    dueDate: '2026-02-08',
  },
];
