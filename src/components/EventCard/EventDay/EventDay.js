function EventDay({ day, time }) {
  return (
    <p className="event_card_date">
      Every {day} at {time}
    </p>
  );
}

export default EventDay;
