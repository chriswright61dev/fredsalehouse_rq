import { getDrinksData } from "./fetchData/getDrinksData";
import { useQuery } from "react-query";
export default function useDrinks() {
  return useQuery(["drinks"], getDrinksData);
}
