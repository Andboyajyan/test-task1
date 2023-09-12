import { useQuery } from "react-query";
import { getData } from "../api/api";

const useData = () => {
  return useQuery(["data"], getData);
};

export default useData;
