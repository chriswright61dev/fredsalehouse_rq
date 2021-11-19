import { getRegularEventsData } from "./fetchData/getRegularEventsData";
import { useQuery } from "react-query";
export default function useRegularEvents() {
  return useQuery(["regularEvents"], getRegularEventsData);
}
