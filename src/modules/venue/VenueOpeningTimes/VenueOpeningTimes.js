import useVenue from "../../../data/reactQueryHooks/useVenue";
function VenueOpeningTimes() {
  const venue = useVenue();
  if (venue.status === "success") {
    const venueData = venue.data[0];
    const special = venueData.venue_opening_special;
    return (
      <div>
        <h3>Opening Times</h3>
        <p>Monday: {venueData.venue_opening_monday}</p>
        <p>Tuesday: {venueData.venue_opening_tuesday}</p>
        <p>Wednesday: {venueData.venue_opening_wednesday}</p>
        <p>Thursday: {venueData.venue_opening_thursday}</p>
        <p>Friday: {venueData.venue_opening_friday}</p>
        <p>Saturday: {venueData.venue_opening_saturday}</p>
        <p>Sunday: {venueData.venue_opening_sunday}</p>
        {special ? <p> vs.venue_opening_special</p> : null}
      </div>
    );
  } else {
    return null;
  }
}

export default VenueOpeningTimes;
