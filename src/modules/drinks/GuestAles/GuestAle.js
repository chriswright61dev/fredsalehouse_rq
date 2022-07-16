import ImageContainer from "../../../components/ImageContainer/ImageContainer";
import HtmlBox from "../../../components/HtmlBox/HtmlBox";
import "./GuestAle.css";

function GuestAle({
  drinkName,
  // pintPrice,
  // halfPrice,
  aleDescription,
  longerAleDescription,
  abv,
  photo,
}) {
  return (
    <div className="guest_ale">
      <HtmlBox content={drinkName} className="guest_ale__name" />
      <div className="guest_ale__container">
        <div className="guest_ale__image">
          <ImageContainer type="square" source={photo} alt={drinkName} />
        </div>
        <div className="guest_ale__prices">
          <p>abv {abv}</p>
          {/* <p className="guest_ale__price">£ {halfPrice} </p>
          <p>Half Pint</p>
          <p className="guest_ale__price">£ {pintPrice}</p>
          <p>a Pint</p> */}
        </div>
      </div>

      <HtmlBox
        content={longerAleDescription}
        className="guest_ale__description"
      />
    </div>
  );
}

export default GuestAle;
