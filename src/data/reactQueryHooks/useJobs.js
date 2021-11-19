import { getJobsData } from "./fetchData/getJobsData";
import { useQuery } from "react-query";
export default function useJobs() {
  return useQuery(["jobs"], getJobsData);
}
