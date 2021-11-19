import { getData } from "./getData";
//drinks data
export async function getNewsData() {
  const url = "http://levenshulmelife.com/drupal9/api_news_freds";
  return getData(url);
}
