import ImageContainer from "../../../components/ImageContainer/ImageContainer";
import HtmlBox from "../../../components/HtmlBox/HtmlBox";
import "./GuestAle.css";

function GuestAle({
  drinkName,
  pintPrice,
  halfPrice,
  aleDescription,
  longerAleDescription,
  photo,
}) {
  return (
    <div className="guest_ale">
      <p className="guest_ale__name"> {drinkName}</p>
      <div className="guest_ale__container">
        <div className="guest_ale__image">
          <ImageContainer type="square" source={photo} alt={drinkName} />
        </div>
        <div className="guest_ale__prices">
          <p className="guest_ale__price">£ {halfPrice} </p>
          <p>Half Pint</p>
          <p className="guest_ale__price">£ {pintPrice}</p>
          <p>a Pint</p>
        </div>
      </div>
      <p className="guest_ale__description"> {aleDescription} </p>
      <HtmlBox
        content={longerAleDescription}
        className="guest_ale__description"
      />
    </div>
  );
}

export default GuestAle;
