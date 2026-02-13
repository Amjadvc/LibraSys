import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
} from 'recharts';
import ChartBox from './ChartBox';
import ChartTitle from './ChartTitle';
import { CHART_COLORS } from '../../utils/constants';

function CategoriesChart({ chartData }) {
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
  );
}

export default CategoriesChart;
