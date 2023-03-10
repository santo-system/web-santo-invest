import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ["Anakin", "Barry Allen", "Kal-El", "Logan", "Padmé"],
  };

  const options = {
    legend: {
      show: true,
    },
  };

  return (
    <ReactApexChart
      options={{ ...options, labels: mockData.labels }}
      series={mockData.series}
      type="pie"
      height={350}
    />
  );
};

export default PieChart;
