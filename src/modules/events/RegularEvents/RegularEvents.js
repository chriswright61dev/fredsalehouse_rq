import useRegularEvents from "../../../data/reactQueryHooks/useRegularEvents";
import EventCard from "../../../components/EventCard/EventCard";
function RegularEvents() {
  const regularEvents = useRegularEvents();
  if (regularEvents.status === "success") {
    const reData = regularEvents.data;
    if (reData.length === 0) {
      return null;
    } else {
      return (
        <div className="regular_events">
          {reData.map((anEvent) => {
            return (
              <EventCard
                link={"regularevents"}
                key={anEvent.id}
                id={anEvent.id}
                name={anEvent.event_name}
                imageURL={anEvent.event_poster}
                description={anEvent.event_description}
                day={anEvent.event_regular_day}
                time={anEvent.event_regular_time}
                admission={anEvent.event_admission}
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
export default RegularEvents;
