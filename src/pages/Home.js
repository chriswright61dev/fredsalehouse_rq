import useVenue from "../data/reactQueryHooks/useVenue";
import themeSelect from "../utilities/theme";
import Venue from "../modules/venue/Venue/Venue";
import VenueAbout from "../modules/venue/VenueAbout/VenueAbout";
import VenueOpeningTimes from "../modules/venue/VenueOpeningTimes/VenueOpeningTimes";
import BeerNews from "../modules/news/BeerNews";
import OfferNews from "../modules/news/OfferNews";
import GuestAles from "../modules/drinks/GuestAles/GuestAles";
import PosterEvents from "../modules/events/PosterEvents/PosterEvents";
import RegularEvents from "../modules/events/RegularEvents/RegularEvents";
import DatedEvents from "../modules/events/DatedEvents/DatedEvents";
// import SportsEvents from "../modules/events/SportsEvents/SportsEvents";
import PageTop from "../components/PageTop/Pagetop";
import LinkBox from "../components/textBoxes/LinkBox";
function Home() {
  const venue = useVenue();
  if (venue.status === "success") {
    const themeName = themeSelect();
    return (
      <div className={themeName}>
        <div className="container">
          <PageTop />
          <div className="info_column">
            <Venue />
            <VenueAbout />
            <LinkBox text="Show Freds on the Map" link="/aboutus" />
            <VenueOpeningTimes />
          </div>
          <div className="info_column">
            <OfferNews />
            <LinkBox
              text="Jobs with the Levenshulme Pub Company"
              link="/jobs"
            />
            <BeerNews />
          </div>
          <div className="info_column">
            <GuestAles />

            <LinkBox text="Drinks served at Freds Ale House" link="/drinks" />
          </div>
          <div className="info_column">
            <LinkBox text="Whats on at Freds" link="/events" />
            <PosterEvents />
            <DatedEvents />
            <RegularEvents />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Home;
