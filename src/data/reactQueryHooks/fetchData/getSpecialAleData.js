import { getData } from "./getData";
//guestales data
export async function getSpecialAleData() {
  const url =
    "http://levenshulmelife.com/drupal9/api_drinks_freds_special_ale/";
  return getData(url);
}
