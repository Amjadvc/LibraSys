import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import ChartBox from './ChartBox';
import ChartTitle from './ChartTitle';
import { useDarkMode } from '../../context/DarkModeContext';

function BorrowingChart({ borrowingData }) {
  const { isDarkMode } = useDarkMode();
  return (
    <ChartBox>
      <ChartTitle title="Borrowing Trends" />
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={borrowingData}
          margin={{ top: 30, right: 2, left: 2, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={`${isDarkMode ? '#232a3f' : '#c0c1c3'}`}
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 13 }}
          />
          <YAxis
            dataKey="borrowed"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 13 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            }}
          />
          <Legend
            iconType="circle"
            wrapperStyle={{ paddingTop: '20px', fontSize: '14px' }}
          />
          <Bar
            dataKey="borrowed"
            name="Borrowed"
            fill="#6366f1"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="returned"
            name="Returned"
            fill="#10b981"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default BorrowingChart;
