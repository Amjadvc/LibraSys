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
import { useEffect, useState } from 'react';

function BorrowingChart({ borrowingData }) {
  const { isDarkMode } = useDarkMode();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  //update when screen resizes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

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
          {!isMobile && (
            <YAxis
              dataKey="borrowed"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 13 }}
            />
          )}

          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--background-50)',
              borderRadius: '8px',
              border: '1px solid var(--background-200)',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            }}
            labelStyle={{
              color: 'var(--text-700)',
              fontWeight: 600,
              fontSize: '13px',
            }}
            cursor={{ fill: 'var(--background-200)' }}
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
