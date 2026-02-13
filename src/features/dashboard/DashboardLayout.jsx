import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { books, members, transactions } from './data/dashboard.mock';
import {
  getBorrowingTrends,
  getTopCategories,
} from '../../utils/dashboard.utils';
import Stats from './Stats';
import BorrowingChart from './BorrowingChart';
import CategoriesChart from './CategoriesChart';

function DashboardLayout() {
  // Get top 5 book categories for the PieChart
  const chartData = getTopCategories(books, 5);

  // Generate monthly borrowed/returned summary for the bar chart
  const borrowingData = getBorrowingTrends(transactions);

  return (
    <div className="mt-4 flex flex-col gap-6">
      <Stats books={books} members={members} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <BorrowingChart borrowingData={borrowingData} />
        <CategoriesChart chartData={chartData} />
      </div>
    </div>
  );
}

export default DashboardLayout;
