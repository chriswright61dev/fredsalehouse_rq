import useSpecialAle from "../../../data/reactQueryHooks/useSpecialAle";
import "./PrideLevBeer.css";
import ImageContainer from "../../../components/ImageContainer/ImageContainer";
import HtmlBox from "../../../components/HtmlBox/HtmlBox";
export default function PrideLevBeer() {
  const specialAle = useSpecialAle();
  console.log(specialAle);
  if (specialAle.status === "success") {
    const specialAleData = specialAle.data;
    if (specialAleData.length > 0) {
      const ale = specialAleData[0]; // should only be one
      console.log(ale);

      const drinkName = ale.title,
        //     halfPrice = ale.price_half,
        //     pintPrice = ale.price_pint,
        aleDescription = ale.longer_guestaledescription,
        abv = ale.abv,
        photo = ale.photo;

      return (
        <div className="special_ale">
          <HtmlBox content={drinkName} className="special_ale__name" />
          <p className="special_ale__abv">Abv: {abv}</p>;
          <div className="special_ale_image">
            <ImageContainer type="square" source={photo} alt={drinkName} />
          </div>
          <HtmlBox
            content={aleDescription}
            className="special_ale__description"
          />
        </div>
      );
    }
  } else return null;
}
