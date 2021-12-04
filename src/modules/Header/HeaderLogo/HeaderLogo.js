import "./HeaderLogo.css";
import useVenue from "../../../data/reactQueryHooks/useVenue";
import { Link } from "react-router-dom";
function HeaderLogo() {
  const venue = useVenue();

  if (venue.status === "success") {
    const venueData = venue.data[0];

    return (
      <Link to="/">
        <div className="header_logo animate_pop_in duration2000">
          <img src={venueData.venue_logo} alt={venueData.venue_name} />
        </div>
      </Link>
    );
  } else {
    return null;
  }
}

export default HeaderLogo;
