import { getData } from "./getData";
//events data
export async function getEventsData() {
  const url = "http://levenshulmelife.com/drupal9/api_events_freds/";
  return getData(url);
}
