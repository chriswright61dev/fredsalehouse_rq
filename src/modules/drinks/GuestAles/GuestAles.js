import useGuestAles from "../../../data/reactQueryHooks/useGuestAles";
import GuestAle from "./GuestAle";
import GuestAlesHeader from "./GuestAlesHeader";
import { beersLastChanged } from "../../../utilities/utilities";
function GuestAles() {
  const guestAles = useGuestAles();

  if (guestAles.status === "success") {
    const guestAlesData = guestAles.data;
    let beerschanged = null;
    if (guestAlesData.length > 0) {
      beerschanged = beersLastChanged(guestAlesData);
    }
    return (
      <div className="guest_ales">
        <GuestAlesHeader changed={beerschanged} />

        {guestAlesData.map((drink) => {
          return (
            <>
              <GuestAle
                key={drink.id}
                drinkName={drink.title}
                // halfPrice={drink.price_half}
                // pintPrice={drink.price_pint}
                aleDescription={drink.guestaledescription}
                longerAleDescription={drink.longer_guestaledescription}
                abv={drink.abv}
                photo={drink.photo}
              ></GuestAle>
            </>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default GuestAles;
