import useVenue from "../../../data/reactQueryHooks/useVenue";

function Venue() {
  const venue = useVenue();
  if (venue.status === "success") {
    const venueData = venue.data[0];
    return (
      <div>
        <h1>{venueData.venue_name}</h1>
        <p> {venueData.venue_address_1}</p>
        <p> {venueData.venue_address_2}</p>
        <p> {venueData.venue_address_3}</p>
        <p> {venueData.venue_postcode}</p>
        <p> {venueData.venue_telephone}</p>
      </div>
    );
  } else {
    return null;
  }
}

export default Venue;
