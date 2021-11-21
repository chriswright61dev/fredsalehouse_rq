import useEvents from "../../../data/reactQueryHooks/useEvents";
import EventCard from "../../../components/EventCard/EventCard";
import "./DatedEvents.css";
function DatedEvents() {
  const events = useEvents();

  if (events.status === "success") {
    const eventsData = events.data;

    if (eventsData.length === 0) {
      return null;
    } else {
      return (
        <div className="dated_events">
          {eventsData.map((anEvent) => {
            return (
              <EventCard
                link="events"
                key={anEvent.id}
                id={anEvent.id}
                name={anEvent.event_name}
                date={anEvent.event_date_long}
                description={anEvent.event_description}
                admission={anEvent.event_admission}
                imageURL={anEvent.event_poster}
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

export default DatedEvents;
