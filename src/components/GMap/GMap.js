import useVenue from "../../data/reactQueryHooks/useVenue";
import "./Gmap.css";

function GMap() {
  const venue = useVenue();
  if (venue.status === "success") {
    const venueData = venue.data[0];
    const baseUrl = "https://www.google.com/maps/embed/v1/";
    const apikey = "AIzaSyAUplwoF60k0_6w55l-v7JDcG7dSNibq6I";
    const Gkey = "?key=" + apikey;

    const center = `&center=${venueData.venue_gmap_latitude},${venueData.venue_gmap_longitude}`;

    const mapquery = `&q=${venueData.venue_map_query_text}`;
    const zoom = "&zoom=20";
    const mapsrc = baseUrl + "place" + Gkey + mapquery + center + zoom;

    return (
      <div className="gmap">
        <iframe title="map" width="100%" height="100%" src={mapsrc}></iframe>
      </div>
    );
  } else {
    return null;
  }
}

export default GMap;
