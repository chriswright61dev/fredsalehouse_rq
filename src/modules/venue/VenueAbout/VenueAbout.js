import useVenue from "../../../data/reactQueryHooks/useVenue";
function VenueAbout() {
  const venue = useVenue();
  if (venue.status === "success") {
    const venueData = venue.data[0];
    return (
      <div>
        <p> {venueData.venue_about}</p>
      </div>
    );
  } else {
    return null;
  }
}

export default VenueAbout;
