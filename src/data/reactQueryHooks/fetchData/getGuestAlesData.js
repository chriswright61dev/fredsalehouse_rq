import { getData } from "./getData";
//guestales data
export async function getGuestAlesData() {
  const url = "http://levenshulmelife.com/drupal9/api_drinks_freds_guest_ales/";
  return getData(url);
}
