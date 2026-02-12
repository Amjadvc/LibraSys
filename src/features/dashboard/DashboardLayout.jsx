import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import { books, members } from './data/dashboard.mock';
import Stats from './Stats';

function DashboardLayout() {
  // Prepare book data for PieChart: count books per category
  const booksObj = books.reduce((acc, book) => {
    if (!acc[book.category]) {
      acc[book.category] = {
        name: book.category,
        value: 0,
      };
    }

    acc[book.category].value += 1;

    return acc;
  }, {});
  const booksByCategory = Object.values(booksObj);

  return (
    <div className="mt-4 flex flex-col gap-6">
      <Stats books={books} members={members} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="char-box rounded-xl border border-background-200 bg-background-100 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none">
          <h2 className="text-xl font-bold text-text-800 dark:text-text-900">
            Books by Category
          </h2>
        </div>
        <div className="char-box rounded-xl border border-background-200 bg-background-100 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none">
          <h2 className="text-xl font-bold text-text-800 dark:text-text-900">
            Books by Category
          </h2>
          <ResponsiveContainer width="100%" height={320}>
            <PieChart responsive>
              <Pie
                data={booksByCategory}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={95}
              ></Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
