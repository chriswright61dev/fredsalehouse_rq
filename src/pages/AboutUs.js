import Venue from "../modules/venue/Venue/Venue";
import VenueAbout from "../modules/venue/VenueAbout/VenueAbout";
import VenueOpeningTimes from "../modules/venue/VenueOpeningTimes/VenueOpeningTimes";
import BeerNews from "../modules/news/BeerNews";
import OfferNews from "../modules/news/OfferNews";
import GuestAles from "../modules/drinks/GuestAles/GuestAles";
import GMap from "../components/GMap/GMap";
function AboutUs() {
  return (
    <>
      <Venue />
      <VenueAbout />
      <VenueOpeningTimes />
      <BeerNews />
      <OfferNews />
      <GuestAles />
      <GMap />
    </>
  );
}

export default AboutUs;
