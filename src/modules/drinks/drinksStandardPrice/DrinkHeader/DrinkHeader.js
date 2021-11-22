import "./DrinkHeader.css";
function DrinkHeader({ name, abv }) {
  return (
    <div className="drink_header">
      <p className="drink_header_name">{name}</p>
      <p>ABV {abv}</p>
    </div>
  );
}

export default DrinkHeader;
