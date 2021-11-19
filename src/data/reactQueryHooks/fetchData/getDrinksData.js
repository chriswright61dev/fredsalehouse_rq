import { getData } from "./getData";
//drinks data
export async function getDrinksData() {
  const url = "http://levenshulmelife.com/drupal9/api_drinks_freds/";
  return getData(url);
}
