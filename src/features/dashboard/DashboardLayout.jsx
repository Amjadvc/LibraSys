import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
} from 'recharts';
import { books, members } from './data/dashboard.mock';
import { getTopCategories } from '../../utils/dashboard.utils';
import { CHART_COLORS } from '../../utils/constants';
import Stats from './Stats';
import ChartTitle from './ChartTitle';
import ChartBox from './ChartBox';

function DashboardLayout() {
  // Get top 5 book categories for the PieChart
  const chartData = getTopCategories(books, 5);

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
          <ChartTitle title=" Books by Category" />
        </ChartBox>

        <ChartBox>
          <ChartTitle title="Top 5 Book Categories" />

          <ResponsiveContainer width="100%" height={320}>
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
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartBox>
      </div>
    </div>
  );
}

export default DashboardLayout;
