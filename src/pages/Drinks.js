import themeSelect from "../utilities/theme";
import DrinksDraught from "../modules/drinks/drinksStandardPrice/DrinksDraught/DrinksDraught";
import DrinksSpirits from "../modules/drinks/drinksStandardPrice/DrinksSpirits/DrinksSpirits";
import DrinksBottled from "../modules/drinks/drinksStandardPrice/DrinksBottled/DrinksBottled";
import DrinksTypeHeader from "../modules/drinks/drinksStandardPrice/DrinkTypeHeader/DrinkTypeHeader";
import GuestAles from "../modules/drinks/GuestAles/GuestAles";
function Drinks() {
  const themeName = themeSelect();
  return (
    <div className={themeName}>
      <div className="container">
        <div className="info_column">
          <GuestAles />
        </div>
        <div className="info_column">
          <DrinksTypeHeader drinkType="Draught" drinkTypeInfo="" />
          <DrinksDraught />
        </div>
        <div className="info_column">
          <DrinksTypeHeader drinkType="Bottled" drinkTypeInfo="" />
          <DrinksBottled />
        </div>
        <div className="info_column">
          <DrinksTypeHeader
            drinkType="Spirits"
            drinkTypeInfo="Single 25ml  Double 50ml"
          />
          <DrinksSpirits />
        </div>
      </div>
    </div>
  );
}

export default Drinks;
