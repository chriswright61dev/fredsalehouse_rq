import useVenue from "../data/reactQueryHooks/useVenue";
import themeSelect from "../utilities/theme";
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

    const themeName = themeSelect();
    return (
      <div className={themeName}>
        <div className="container">
          <div className="info_column">
            <Venue />
          </div>
          <div className="info_column">
            <VenueAbout />
            <VenueOpeningTimes />
          </div>
          <div className="info_column">
            <BeerNews />
            <OfferNews />
          </div>
          <div className="info_column">
            <GuestAles />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Home;
