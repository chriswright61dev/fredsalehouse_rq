import { getPosterEventsData } from "./fetchData/getPosterEventsData";
import { useQuery } from "react-query";
export default function usePosterEvents() {
  return useQuery(["posterEvents"], getPosterEventsData);
}
