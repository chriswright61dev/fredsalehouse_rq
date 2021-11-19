import { getData } from "./getData";
//poster events data
export async function getPosterEventsData() {
  const url = "http://levenshulmelife.com/drupal9/api_events_poster_freds/";
  return getData(url);
}
