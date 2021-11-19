import { getData } from "./getData";
//regularEvents data
export async function getRegularEventsData() {
  const url = "http://levenshulmelife.com/drupal9/api_events_regular_freds/";
  return getData(url);
}
