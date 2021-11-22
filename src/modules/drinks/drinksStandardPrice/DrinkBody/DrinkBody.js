import "./DrinkBody.css";
function DrinkBody({
  firstPrice,
  firstText,
  secondPrice,
  secondText,
  bottleSize,
}) {
  return (
    <div className="drink__price__container">
      <p className="bottle_size">{bottleSize ? `£ ${bottleSize}` : null}</p>
      <p className="drink_price">
        {firstPrice ? `£ ${firstPrice} ${firstText}` : " "}
      </p>
      <p className="drink_price">
        {secondPrice ? `£ ${secondPrice} ${secondText}` : null}
      </p>
    </div>
  );
}

export default DrinkBody;
