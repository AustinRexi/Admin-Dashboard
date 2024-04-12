import { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";

HighchartsMore(Highcharts);
const initialData = [
  [
    { name: "Category 1", y: 30 },
    { name: "Category 2", y: 20 },
    { name: "Category 3", y: 50 },
  ],
  [
    { name: "Category 1", y: 10 },
    { name: "Category 2", y: 50 },
    { name: "Category 3", y: 40 },
  ],
  // Add more frames as needed
];

const DonutChartRace = () => {
  const [data, setData] = useState(initialData);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [data]);

  const chartOptions = {
    chart: {
      type: "pie",
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: true,
    },
    title: {
      text: null,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        innerSize: "60%",
        dataLabels: {
          enabled: false,
        },
        animation: false,
      },
    },
    series: [
      {
        name: "Data",
        data: data[currentIndex],
        colors: ["#c084fc", "#0000FF", "#fde68a"],
      },
    ],
  };

  return (
    <div className="">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default DonutChartRace;
