import EventsDetails from "../modules/events/EventDetails/EventDetails";
import themeSelect from "../utilities/theme";
function Event() {
  const themeName = themeSelect();
  return (
    <div className={themeName}>
      <div className="container">
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
