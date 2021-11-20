import "./EventCard.css";
import EventDate from "./EventDate/EventDate";
import EventDay from "./EventDay/EventDay";
import EventVenue from "./EventVenue/EventVenue";
import ImageContainer from "../../components/ImageContainer/ImageContainer";
import { Link } from "react-router-dom";
function EventCard({
  link,
  id,
  name,
  venue,
  day,
  date,
  time,
  description,
  admission,
  imageURL,
}) {
  return (
    <div className="event_card">
      <Link to={`/${link}/${id}`}>
        <h4>{name}</h4>
        <div className="event_card_body">
          <div className="event_card_image">
            <ImageContainer type="square" source={imageURL} altText={name} />
          </div>

          <div className="event_card_text">
            {venue ? <EventVenue venue={venue} /> : null}
            {day ? (
              <EventDay day={day} time={time} />
            ) : (
              <EventDate date={date} />
            )}

            <p className="event_card_description">{description} </p>
            <p className="event_card_admission">{admission} </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default EventCard;
