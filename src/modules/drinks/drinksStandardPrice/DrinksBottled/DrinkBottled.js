import DrinkHeader from "../DrinkHeader/DrinkHeader";
import DrinkBody from "../DrinkBody/DrinkBody";
function DrinkBottled({ data }) {
  if (data) {
    return (
      <div className="drink">
        <DrinkHeader name={data.drink_name} abv={data.drink_abv} />
        <DrinkBody
          firstPrice={data.drink_price_bottle}
          firstText="a bottle"
          bottleSize={data.drink_bottle_size}
        />
      </div>
    );
  } else {
    return null;
  }
}

export default DrinkBottled;
