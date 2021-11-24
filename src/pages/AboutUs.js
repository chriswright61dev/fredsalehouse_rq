import themeSelect from "../utilities/theme";
import Venue from "../modules/venue/Venue/Venue";
import VenueAbout from "../modules/venue/VenueAbout/VenueAbout";
import VenueOpeningTimes from "../modules/venue/VenueOpeningTimes/VenueOpeningTimes";
import BeerNews from "../modules/news/BeerNews";
import OfferNews from "../modules/news/OfferNews";
import AboutNews from "../modules/news/AboutNews";
import GuestAles from "../modules/drinks/GuestAles/GuestAles";
import GMap from "../components/GMap/GMap";
import GStreetView from "../components/GStreetView/GStreetView";
import PageTop from "../components/PageTop/Pagetop";
function AboutUs() {
  const themeName = themeSelect();
  return (
    <div className={themeName}>
      <div className="container">
        <PageTop />
        <div className="info_column">
          <Venue />
          <VenueAbout />
        </div>
        <div className="info_column">
          <VenueOpeningTimes />
          <BeerNews />
          <AboutNews />
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
