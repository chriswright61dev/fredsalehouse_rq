import { getData } from "./getData";
//old events data
export async function getOldEventsData() {
  const url = "http://levenshulmelife.com/drupal9/api_events_old_freds/";
  return getData(url);
}
