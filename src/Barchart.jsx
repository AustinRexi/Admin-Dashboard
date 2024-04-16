import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BarChart = () => {
  const data = [
    { category: "September 15", value: 10 },
    { category: "September 16", value: 20 },
    { category: "September 17", value: 10 },
    { category: "September 18", value: 30 },
    { category: "September 19", value: 10 },
    { category: "September 20", value: 20 },
  ];
  const options = {
    chart: {
      type: "column",
    },

    xAxis: {
      categories: data.map((item) => item.category),
    },
    yAxis: {},
    series: [
      {
        name: "",
        data: data.map((item) => item.value),
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BarChart;
