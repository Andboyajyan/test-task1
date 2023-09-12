import ReactHighcharts from "react-highcharts";
import useCharts from "./useCharts";
import "./style.scss";

export const Charts = () => {
  const { configPrice, isError, isLoading } = useCharts();

  return (
    <div>
      {isLoading ? (
       <div className="loader"></div>
      ) : !isError ? (
        <ReactHighcharts config={configPrice}></ReactHighcharts>
      ) : (
        <div className="error">
          Your api_token has expired. Please update your API token or use
          initial data.
        </div>
      )}
    </div>
  );
};
