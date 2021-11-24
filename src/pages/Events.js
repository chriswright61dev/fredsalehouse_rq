import themeSelect from "../utilities/theme";
import PosterEvents from "../modules/events/PosterEvents/PosterEvents";
import RegularEvents from "../modules/events/RegularEvents/RegularEvents";
import DatedEvents from "../modules/events/DatedEvents/DatedEvents";
import SportsEvents from "../modules/events/SportsEvents/SportsEvents";
import PageTop from "../components/PageTop/Pagetop";
function Events() {
  const themeName = themeSelect();
  return (
    <div className={themeName}>
      <div className="container">
        <PageTop />
        <div className="info_column">
          <PosterEvents />
        </div>
        <div className="info_column">
          <DatedEvents />
        </div>
        <div className="info_column">
          <RegularEvents />
        </div>
        <div className="info_column">
          <SportsEvents />
        </div>
      </div>
    </div>
  );
}

export default Events;
