import { getData } from "./getData";
//jobsdata
export async function getJobsData() {
  const url = "http://levenshulmelife.com/drupal9/api_jobs_freds/";
  return getData(url);
}
