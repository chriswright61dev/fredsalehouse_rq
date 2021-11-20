import usePosterEvents from "../../../data/reactQueryHooks/usePosterEvents";
import "./PosterEvents.css";
import PosterEvent from "./PosterEvent";
function PosterEvents() {
  const posterEvents = usePosterEvents();
  if (posterEvents.status === "success") {
    const peData = posterEvents.data;
    if (peData.length === 0) {
      return null;
    } else {
      return (
        <div className="poster_events">
          {peData.map((anEvent) => {
            return (
              <PosterEvent
                key={anEvent.id}
                name={anEvent.poster_event_title}
                imageURL={anEvent.poster_event_image}
              />
            );
          })}
        </div>
      );
    }
  } else {
    return null;
  }
}

export default PosterEvents;
