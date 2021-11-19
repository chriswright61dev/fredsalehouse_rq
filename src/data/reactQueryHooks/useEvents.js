import { getEventsData } from "./fetchData/getEventsData";
import { useQuery } from "react-query";
export default function useEvents() {
  return useQuery(["events"], getEventsData);
}
