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
      {firstPrice ? (
        <p className="drink_price">
          £ {firstPrice} {firstText}
        </p>
      ) : null}

      {secondPrice ? (
        <p className="drink_price">
          £ {secondPrice} {secondText}{" "}
        </p>
      ) : null}

      {bottleSize ? <p className="bottle_size"> {bottleSize}</p> : null}
    </div>
  );
}

export default DrinkBody;
