import PosterEvents from "../modules/events/PosterEvents/PosterEvents";
import RegularEvents from "../modules/events/RegularEvents/RegularEvents";
function Events() {
  return (
    <div>
      'events page'
      <PosterEvents />
      <RegularEvents />
    </div>
  );
}

export default Events;
