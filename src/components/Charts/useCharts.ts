import useData from "../../hooks/useData";

const useCharts = () => {
  const { data, isLoading, isError } = useData();
  
  const configPrice: Highcharts.Options = {
    yAxis: [
      {
        offset: 20,
        labels: {
          x: -15,
          style: {
            color: "#000",
            position: "absolute",
          },
          align: "left",
        },
      },
    ],
    tooltip: {
      shared: true,
    },
    title: {
      text: `Stock price`,
    },
    chart: {
      height: 600,
    },

    credits: {
      enabled: false,
    },

    legend: {
      enabled: true,
    },
    series: [
      {
        name: "Price",
        type: "spline",
        data: data,

      },
    ],
  };

  return { configPrice, isLoading, isError };
};

export default useCharts;
