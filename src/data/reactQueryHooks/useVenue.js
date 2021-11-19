import { getVenueData } from "./fetchData/getVenueData";
import { useQuery } from "react-query";
export default function useVenue() {
  return useQuery(["venue"], getVenueData);
}
