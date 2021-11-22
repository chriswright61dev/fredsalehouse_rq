import "./DrinkTypeHeader.css";
function DrinkTypeHeader({ drinkType, drinkTypeInfo }) {
  return (
    <div className="drink_type_header">
      <h3>{drinkType}</h3>
      <p>{drinkTypeInfo}</p>
    </div>
  );
}

export default DrinkTypeHeader;
