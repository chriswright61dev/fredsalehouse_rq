import DrinkHeader from "../DrinkHeader/DrinkHeader";
import DrinkBody from "../DrinkBody/DrinkBody";

function DrinkSpirits({ data }) {
  if (data) {
    return (
      <div className="drink">
        <DrinkHeader name={data.drink_name} abv={data.drink_abv} />
        <DrinkBody
          firstText="Single"
          firstPrice={data.drink_price_single}
          secondText="Double"
          secondPrice={data.drink_price_double}
        />
      </div>
    );
  } else {
    return null;
  }
}

export default DrinkSpirits;
