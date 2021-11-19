import { getData } from "./getData";
//foods data
export async function getFoodsData() {
  const url = "http://levenshulmelife.com/drupal9/api_food_freds";
  return getData(url);
}
