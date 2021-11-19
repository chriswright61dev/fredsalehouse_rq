import useVenue from "../../../data/reactQueryHooks/useVenue";
function HeaderVenueDescription() {
  const venue = useVenue();

  if (venue.status === "success") {
    const venueData = venue.data[0];
    return (
      <div className="header-venue-description">
        {venueData.venue_description}
      </div>
    );
  } else {
    return null;
  }
}

export default HeaderVenueDescription;
