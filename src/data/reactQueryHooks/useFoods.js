import { getFoodsData } from "./fetchData/getFoodsData";
import { useQuery } from "react-query";
export default function useFoods() {
  return useQuery(["foods"], getFoodsData);
}
