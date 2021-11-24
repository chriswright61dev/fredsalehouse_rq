import useVenue from "../../../data/reactQueryHooks/useVenue";
import HtmlBox from "../../../components/HtmlBox/HtmlBox";
import "./VenueAbout.css";
function VenueAbout() {
  const venue = useVenue();
  if (venue.status === "success") {
    const venueData = venue.data[0];
    return <HtmlBox content={venueData.venue_about} className="venue_about" />;
  } else {
    return null;
  }
}

export default VenueAbout;
