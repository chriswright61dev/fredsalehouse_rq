import { getGuestAlesData } from "./fetchData/getGuestAlesData";
import { useQuery } from "react-query";
export default function useGuestAles() {
  return useQuery(["guestAles"], getGuestAlesData);
}
