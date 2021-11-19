import useVenue from "../data/reactQueryHooks/useVenue";
import Venue from "../modules/venue/Venue/Venue";
import VenueAbout from "../modules/venue/VenueAbout/VenueAbout";
import VenueOpeningTimes from "../modules/venue/VenueOpeningTimes/VenueOpeningTimes";
import BeerNews from "../modules/news/BeerNews";
import OfferNews from "../modules/news/OfferNews";
import GuestAles from "../modules/drinks/GuestAles/GuestAles";
function Home() {
  const venue = useVenue();
  if (venue.status === "success") {
    // add a loading screen before success
    // this is the first load page - data is pulled in in each module
    return (
      <>
        <Venue />
        <VenueAbout />
        <VenueOpeningTimes />
        <BeerNews />
        <OfferNews />
        <GuestAles />
      </>
    );
  } else {
    return null;
  }
}

export default Home;
