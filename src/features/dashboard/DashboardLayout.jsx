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
import { CHART_COLORS } from '../../utils/constants';
import Stats from './Stats';
import ChartTitle from './ChartTitle';
import ChartBox from './ChartBox';
import { useDarkMode } from '../../context/DarkModeContext';

function DashboardLayout() {
  const { isDarkMode } = useDarkMode();
  // Get top 5 book categories for the PieChart
  const chartData = getTopCategories(books, 5);

  // Generate monthly borrowed/returned summary for the bar chart
  const borrowingData = getBorrowingTrends(transactions);

  // Custom active slice for PieChart: slightly enlarges the hovered sector
  function renderActiveShape(props) {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
      props;

    return (
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 5}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    );
  }

  return (
    <div className="mt-4 flex flex-col gap-6">
      <Stats books={books} members={members} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
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

        <ChartBox>
          <ChartTitle title="Top 5 Book Categories" />

          <ResponsiveContainer width="100%" height={350}>
            <PieChart style={{}} responsive>
              <Pie
                data={chartData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={95}
                innerRadius={60}
                paddingAngle={5}
                activeShape={renderActiveShape}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    stroke={entry.color}
                    fill={CHART_COLORS[index % CHART_COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                }}
              />
              <Legend
                layout="vertical"
                verticalAlign="middle"
                align="right"
                iconType="circle"
                wrapperStyle={{ fontSize: '14px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartBox>
      </div>
    </div>
  );
}

export default DashboardLayout;
