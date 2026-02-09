export const transactions = [
  {
    id: 101,
    book: {
      id: 1,
      title: 'Clean Code',
      cover: 'https://picsum.photos/40/60?random=1',
      price: 25,
      mortgage: 10,
    },
    customer: {
      id: 201,
      name: 'Ahmed Ali',
    },
    status: 'reserved', // reserved | collected
    quantity: 1,
    createdAt: '2026-02-01',
    dueDate: '2026-02-15',
    price: 18.0, // السعر وقت الشراء
    mortgage: 20.0, // الرهن وقت الشراء
    extraPrice: 3, // رسوم إضافية (تكون 0 في البداية)
    extensionCount: 2, // عدد التمديدات (تكون 0 في البداية)
  },
  {
    id: 102,
    book: {
      id: 2,
      title: 'The Pragmatic Programmer',
      cover: 'https://picsum.photos/40/60?random=2',
      price: 50,
      mortgage: 29,
    },
    customer: {
      id: 202,
      name: 'Sara Hassan',
    },
    status: 'collected',
    quantity: 1,
    createdAt: '2026-01-28',
    dueDate: '2026-02-11',
    price: 20.0, // السعر وقت الشراء
    mortgage: 70.0, // الرهن وقت الشراء
    extraPrice: 20, // رسوم إضافية (تكون 0 في البداية)
    extensionCount: 10, // عدد التمديدات (تكون 0 في البداية)
  },
  {
    id: 103,
    book: {
      id: 3,
      title: 'Clean Architecture',
      cover: 'https://picsum.photos/40/60?random=3',
      price: 22,
      mortgage: 15,
    },
    customer: {
      id: 203,
      name: 'Omar Khaled',
    },
    status: 'reserved',
    quantity: 2,
    createdAt: '2026-02-02',
    dueDate: '2026-02-16',
    price: 15.0, // السعر وقت الشراء
    mortgage: 30.0, // الرهن وقت الشراء
    extraPrice: 0, // رسوم إضافية (تكون 0 في البداية)
    extensionCount: 0, // عدد التمديدات (تكون 0 في البداية)
  },
  {
    id: 104,
    book: {
      id: 4,
      title: 'Refactoring',
      cover: 'https://picsum.photos/40/60?random=4',
      price: 5,
      mortgage: 12,
    },
    customer: {
      id: 204,
      name: 'Lina Youssef',
    },
    status: 'collected',
    quantity: 1,
    createdAt: '2026-01-25',
    dueDate: '2026-02-08',
    price: 19.0, // السعر وقت الشراء
    mortgage: 80.0, // الرهن وقت الشراء
    extraPrice: 50, // رسوم إضافية (تكون 0 في البداية)
    extensionCount: 88, // عدد التمديدات (تكون 0 في البداية)
  },
];
