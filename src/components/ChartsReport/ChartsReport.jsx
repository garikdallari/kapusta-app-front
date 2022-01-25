import { Container, Card } from './ChartsReport.styled';
import { BarChart, Bar, XAxis, Cell } from 'recharts';
import MobileChartsReport from './MobileChartsReport';
import useWindowDimensions from '../../helpers/useWindowDimensions';

export default function ChartsReport({ data }) {
  const { width } = useWindowDimensions();

  const renderCustomBarLabel = ({ x, y, width, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y - 4}
        fill="#666"
        textAnchor="middle"
        dy={-10}
      >{`${value} usd`}</text>
    );
  };

  return width >= 768 ? (
    <Container>
      <Card>
        <BarChart
          width={605}
          height={328}
          data={data}
          margin={{ top: 50, right: 20, bottom: 9, left: 20 }}
          barCategoryGap={20}
        >
          <XAxis
            dataKey="subcategory"
            axisLine={false}
            tickLine={false}
            dy={5}
          ></XAxis>

          <Bar
            dataKey="sum"
            barSize={38}
            fill="#fd8905"
            label={renderCustomBarLabel}
            radius={[10, 10, 0, 0]}
            animationDuration={1000}
          >
            {data &&
              data.map((el, idx) => (
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
