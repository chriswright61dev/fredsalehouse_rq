import DrinkHeader from "../DrinkHeader/DrinkHeader";
import DrinkBody from "../DrinkBody/DrinkBody";
function DrinkDraught({ data }) {
  if (data) {
    return (
      <div className="drink">
        <DrinkHeader name={data.drink_name} abv={data.drink_abv} />
        <DrinkBody
          firstPrice={data.drink_price_pint}
          firstText="a Pint"
          secondPrice={data.drink_price_half_pint}
          secondText=" ( half Pint )"
        />
      </div>
    );
  } else {
    return null;
  }
}

export default DrinkDraught;
