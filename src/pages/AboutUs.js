import Venue from "../modules/venue/Venue/Venue";
import VenueAbout from "../modules/venue/VenueAbout/VenueAbout";
import VenueOpeningTimes from "../modules/venue/VenueOpeningTimes/VenueOpeningTimes";
import BeerNews from "../modules/news/BeerNews";
import OfferNews from "../modules/news/OfferNews";
import GuestAles from "../modules/drinks/GuestAles/GuestAles";

function AboutUs() {
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
}

export default AboutUs;
