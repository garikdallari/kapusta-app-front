import { Container, Card } from './ChartsReport.styled';
import { BarChart, Bar, XAxis, Cell } from 'recharts';
import MobileChartsReport from './MobileChartsReport';

// const data = [
//   {
//     name: 'Page A',
//     pv: 2400,
//   },

//   {
//     name: 'Page G',
//     pv: 4300,
//   },
// ];

export default function ChartsReport({ data }) {
  const renderCustomBarLabel = ({ x, y, width, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y - 4}
        fill="#666"
        textAnchor="middle"
        dy={-10}
      >{`${value} UAH`}</text>
    );
  };

  const screenWidth = window.screen.width;

  return screenWidth >= 768 ? (
    <Container>
      <Card>
        <BarChart
          width={605}
          height={328}
          data={data}
          margin={{ top: 50, right: 15, bottom: 9, left: 15 }}
          barCategoryGap={20}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            dy={5}
          ></XAxis>

          <Bar
            dataKey="pv"
            barSize={38}
            fill="#fd8905"
            label={renderCustomBarLabel}
            radius={[10, 10, 0, 0]}
            animationDuration={1000}
          >
            {data.map((el, idx) => (
              <Cell
                key={`cell-${idx}`}
                fill={idx % 3 ? '#FFDAC0' : '#ff751d'}
              />
            ))}
          </Bar>
        </BarChart>
      </Card>
    </Container>
  ) : (
    <MobileChartsReport data={data} />
  );
}
