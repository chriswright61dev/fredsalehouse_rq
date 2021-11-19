import { getOtherVenueEventsData } from "./fetchData/getOtherVenueEventsData";
import { useQuery } from "react-query";
export default function useOtherVenueEvents() {
  return useQuery(["otherVenueEvents"], getOtherVenueEventsData);
}
