import useDrinks from "../../../../data/reactQueryHooks/useDrinks";
import DrinkSpirits from "./DrinkSpirits";

function DrinksSpirits() {
  const drinks = useDrinks();
  if (drinks.status === "success") {
    const drinksData = drinks.data;
    const spiritsData = drinksData.filter(
      (drink) => drink.drink_type === "spirit"
    );

    return (
      <div className="drinks_spirits">
        {/* <DrinksOffersHeader /> */}
        {spiritsData.map((drink) => {
          return <DrinkSpirits key={drink.id} data={drink} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
export default DrinksSpirits;
