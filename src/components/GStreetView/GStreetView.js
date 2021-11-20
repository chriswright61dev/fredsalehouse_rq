import useVenue from "../../data/reactQueryHooks/useVenue";
import "./GStreetView.css";
function GStreetView() {
  const venue = useVenue();
  const venueData = venue.data[0];

  const baseUrl = "https://www.google.com/maps/embed/v1/";
  const apikey = "AIzaSyAUplwoF60k0_6w55l-v7JDcG7dSNibq6I";
  const Gkey = "?key=" + apikey;
  const location = `&location=
  ${venueData.venue_gstreet_latitude},
  ${venueData.venue_gstreet_longitude}`;
  const heading = `&heading=${venueData.venue_gstreet_heading}`;
  const pitch = `&pitch=${venueData.venue_gstreet_pitch}`;

  const sviewsrc = baseUrl + "streetview" + Gkey + location + heading + pitch;

  if (venueData.length === 0) {
    return null;
  } else {
    return (
      <div className="gstreetview">
        <iframe
          title="streetview"
          width="100%"
          height="100%"
          src={sviewsrc}
        ></iframe>
      </div>
    );
  }
}

export default GStreetView;
