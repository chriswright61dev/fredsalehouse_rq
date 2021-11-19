import { getData } from "./getData";
//events data need id
export async function getEventDetailsData(queryKey) {
  const id = queryKey.queryKey[1];
  const url = "http://levenshulmelife.com/drupal9/api_event/?event_id=" + id;
  return getData(url);
}
