import useDrinks from "../../../../data/reactQueryHooks/useDrinks";
import DrinkBottled from "./DrinkBottled";
function DrinksBottled() {
  const drinks = useDrinks();
  if (drinks.status === "success") {
    const drinksData = drinks.data;
    const bottledData = drinksData.filter(
      (drink) => drink.drink_type === "bottled"
    );

    return (
      <div className="drinks_draught">
        {bottledData.map((drink) => {
          return <DrinkBottled key={drink.id} data={drink} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default DrinksBottled;
