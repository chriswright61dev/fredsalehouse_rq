import themeSelect from "../utilities/theme";
import PosterEvents from "../modules/events/PosterEvents/PosterEvents";
import RegularEvents from "../modules/events/RegularEvents/RegularEvents";
import DatedEvents from "../modules/events/DatedEvents/DatedEvents";
function Events() {
  const themeName = themeSelect();
  return (
    <div className={themeName}>
      <div className="container">
        <div className="info_column">
          'events page' <PosterEvents />
        </div>
        <div className="info_column">
          <RegularEvents />
        </div>
        <div className="info_column">
          <DatedEvents />
        </div>
        <div className="info_column"> </div>
      </div>
    </div>
  );
}

export default Events;
