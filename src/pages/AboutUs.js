import themeSelect from "../utilities/theme";
import Venue from "../modules/venue/Venue/Venue";
import VenueAbout from "../modules/venue/VenueAbout/VenueAbout";
import VenueOpeningTimes from "../modules/venue/VenueOpeningTimes/VenueOpeningTimes";
import BeerNews from "../modules/news/BeerNews";
import OfferNews from "../modules/news/OfferNews";
import GuestAles from "../modules/drinks/GuestAles/GuestAles";
import GMap from "../components/GMap/GMap";
import GStreetView from "../components/GStreetView/GStreetView";
function AboutUs() {
  const themeName = themeSelect();
  return (
    <div className={themeName}>
      <div className="container">
        <div className="info_column">
          <Venue />
          <VenueAbout />
          <VenueOpeningTimes />
        </div>
        <div className="info_column">
          <BeerNews />
        </div>
        <div className="info_column">
          <OfferNews />
        </div>
        <div className="info_column">
          <GuestAles />
        </div>

        <GMap />
        <GStreetView />
      </div>
    </div>
  );
}

export default AboutUs;
