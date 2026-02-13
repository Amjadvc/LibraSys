import { useEffect, useState } from 'react';
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

// Custom themed tooltip for PieChart (replaces default Recharts tooltip)
function CustomTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;

  const { name, value } = payload[0];

  return (
    <div className="rounded-xl border border-background-200 bg-background-50 p-4 shadow-lg">
      <p className="mb-1 text-xs font-medium text-text-400">{name}</p>
      <p className="text-base font-semibold text-text-900">{value} books</p>
    </div>
  );
}

function CategoriesChart({ chartData }) {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 1200);

  useEffect(() => {
    function handleResize() {
      setIsSmall(window.innerWidth < 1200);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        <PieChart>
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
            content={CustomTooltip}
            wrapperStyle={{ zIndex: 1000, pointerEvents: 'none' }}
          />

          <Legend
            layout={isSmall ? 'horizontal' : 'vertical'}
            verticalAlign={isSmall ? 'bottom' : 'middle'}
            align={isSmall ? 'center' : 'right'}
            iconType="circle"
            wrapperStyle={{
              fontSize: '14px',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default CategoriesChart;
