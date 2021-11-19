import { getData } from "./getData";
//other Venue events data
export async function getOtherVenueEventsData() {
  const url =
    "http://levenshulmelife.com/drupal9/api_events_other_venue_freds/";
  return getData(url);
}
