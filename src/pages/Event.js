import EventsDetails from "../modules/events/EventDetails/EventDetails";
import themeSelect from "../utilities/theme";
import PageTop from "../components/PageTop/Pagetop";
function Event() {
  const themeName = themeSelect();
  return (
    <div className={themeName}>
      <div className="container">
        <PageTop />
        <div className="detail_column">
          <EventsDetails />
        </div>
        <div className="info_column"></div>
        <div className="info_column"> </div>
      </div>
    </div>
  );
}

export default Event;
