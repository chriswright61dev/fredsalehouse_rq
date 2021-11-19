import useGuestAles from "../../../data/reactQueryHooks/useGuestAles";
import GuestAle from "./GuestAle";

function GuestAles() {
  const guestAles = useGuestAles();
  if (guestAles.status === "success") {
    const guestAlesData = guestAles.data;

    return (
      <div className="guest_ales">
        {guestAlesData.map((drink) => {
          return (
            <GuestAle
              key={drink.id}
              drinkName={drink.drink_name}
              halfPrice={drink.price_half}
              pintPrice={drink.price_pint}
              aleDescription={drink.guestaledescription}
              longerAleDescription={drink.longer_guestaledescription}
              photo={drink.photo}
            ></GuestAle>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default GuestAles;
