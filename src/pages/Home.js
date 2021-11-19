import useVenue from "../data/reactQueryHooks/useVenue";

function Home() {
  const venue = useVenue();
  if (venue.status === "success") {
    console.log(venue.data);
    return <div>{venue.data[0].venue_about}</div>;
  } else {
    return null;
  }
}

export default Home;
