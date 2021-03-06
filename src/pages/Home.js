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
function Home({ headerReady }) {
  const venue = useVenue();
  if (venue.status === "success" && headerReady) {
    const themeName = themeSelect();
    return (
      <div className={themeName}>
        <div className="container animate_fade_in duration1000 ">
          <PageTop />
          <div className="info_column">
            <Venue />
            <VenueAbout />
            <LinkBox text="Show Freds Ale House Location" link="/aboutus" />
          </div>
          <div className="info_column">
            <VenueOpeningTimes />
          </div>

          <div className="info_column">
            <GuestAles />
            {/* <LinkBox text="Drinks served at Freds Ale House" link="/drinks" /> */}
            <OfferNews />
            <BeerNews />
          </div>
          <div className="info_column">
            <LinkBox text="Whats on at Freds" link="/events" />
            <PosterEvents />
            <DatedEvents />
            <RegularEvents />
            <LinkBox
              text="Jobs with the Levenshulme Pub Company"
              link="/jobs"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Home;
