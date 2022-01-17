import {
  BarChart,
  Bar,
  XAxis,
  Cell,
  ResponsiveContainer,
  LabelList,
  YAxis,
} from 'recharts';

export default function MobileChartsReport({ data }) {
  const renderBarLabel = ({ x, y, width, value }) => (
    <text x={x + width / 1.1} y={y} textAnchor="middle" fontSize={10} dy={-10}>
      {value ? `${value} UAH` : ''}
    </text>
  );

  const renderCategoryLabel = ({ x, y, value }) => (
    <text x={x} y={y} dy={-10} fontSize={10}>
      {value}
    </text>
  );

  return (
    <ResponsiveContainer width="100%" height={50 * data.length}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 19 }}
        barGap="15"
      >
        <XAxis hide axisLine={false} type="number" />
        <YAxis dataKey="name" type="category" hide />
        <Bar
          dataKey="pv"
          barSize={15}
          radius={[0, 10, 10, 0]}
          label={renderBarLabel}
          fill="#52555f"
          minPointSize={5}
        >
          {data.map((el, idx) => (
            <Cell key={`cell-${idx}`} fill={idx % 3 ? '#FFDAC0' : '#ff751d'} />
          ))}
          <LabelList
            dataKey="name"
            content={renderCategoryLabel}
            fill="#52555F"
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
