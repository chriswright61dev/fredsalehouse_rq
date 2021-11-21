import useEventDetails from "../../../data/reactQueryHooks/useEventDetails";
import { hasDatePassed } from "../../../utilities/utilities";

import { useParams } from "react-router-dom";
import EventDetail from "./EventDetail/EventDetail";

function EventDetails() {
  let { event_id } = useParams();
  const eventDetails = useEventDetails(event_id);

  if (eventDetails.status === "success") {
    const edData = eventDetails.data[0];

    if (!edData) {
      return null;
    } else {
      const HasEventPassed = hasDatePassed(edData.event_date_time);
      return <EventDetail oldevent={HasEventPassed} data={edData} />;
    }
  } else {
    return null;
  }
}
export default EventDetails;
