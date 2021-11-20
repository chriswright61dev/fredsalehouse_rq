import PosterEvents from "../modules/events/PosterEvents/PosterEvents";
import RegularEvents from "../modules/events/RegularEvents/RegularEvents";
import DatedEvents from "../modules/events/DatedEvents/DatedEvents";
function Events() {
  return (
    <div>
      'events page'
      <PosterEvents />
      <RegularEvents />
      <DatedEvents />
    </div>
  );
}

export default Events;
