import { getData } from "./getData";
export async function getVenueData() {
  const url = "http://levenshulmelife.com/drupal9/api_venue_freds/";
  return getData(url);
}
