import axios from "axios";
import { createChartArr, csvJSON } from "../helpers";

type Response = [number, number][];

export const getData = async (): Promise<Response> => {
  const response = await axios.get(`https://eodhd.com/api/eod/MCD.US`, {
    params: {
      api_token: process.env.REACT_APP_API_TOKEN,
      period: "d",
      from: "2023-08-08",
      to: "2023-11-09",
    },
  });
  const jsonResponse = csvJSON(response.data);
  return createChartArr(jsonResponse);
};
