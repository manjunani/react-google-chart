import { Chart } from 'react-google-charts';

const charts = (props) => {
  return (
    <Chart
      chartType={props.chart.chartType}
      data={props.chart.data}
      options={props.chart.options}
    />
  );
};

export default charts;
