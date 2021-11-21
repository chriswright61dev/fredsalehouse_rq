import "./EventDetail.css";
import { DateFormat } from "../../../../utilities/utilities";
import ImageContainer from "../../../../components/ImageContainer/ImageContainer";
import HtmlBox from "../../../../components/HtmlBox/HtmlBox";
import OldEventDate from "./OldEventDate/OldEventDate";
import EventDate from "./EventDate/EventDate";
function EventDetail(props) {
  const currentVenue = props.currentVenue;
  const es = props.data;
  if (es) {
    const theDateData = DateFormat(es.event_date_long);
    return (
      <div className="dated_event_detail">
        <div className="dated_event_detail_text">
          {props.oldevent ? (
            <OldEventDate date={theDateData} />
          ) : (
            <EventDate date={theDateData} />
          )}

          {/* We could be displaying from another venue */}
          {currentVenue === es.event_venue ? null : (
            <h4 className="venue_name"> at {es.event_venue}</h4>
          )}
          <HtmlBox content={es.event_body} />
          {/* <div
            className="event_body"
            dangerouslySetInnerHTML={}
          /> */}

          <p>Admission: {es.event_admission}</p>
        </div>

        <div className="dated_event_detail_images">
          {es.event_poster_original ? (
            <ImageContainer
              type="square"
              source={es.event_poster_original}
              altText={es.name}
            />
          ) : null}

          {es.event_image_1 ? (
            <ImageContainer source={es.event_image_1} altText={es.name} />
          ) : null}
          {es.event_image_2 ? (
            <ImageContainer source={es.event_image_2} altText={es.name} />
          ) : null}
          {es.event_image_3 ? (
            <ImageContainer source={es.event_image_3} altText={es.name} />
          ) : null}
        </div>
      </div>
    );
  } else return null;
}

export default EventDetail;
