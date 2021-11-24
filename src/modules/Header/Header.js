import "./Header.css";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderVenueDescription from "./HeaderVenueDescription/HeaderVenueDescription";
// import HeaderLinks from "./HeaderLinks/HeaderLinks";
import Announcement from "../../modules/news/Announcement";

function Header() {
  return (
    <header>
      <HeaderLogo />
      <HeaderVenueDescription />
      {/* <HeaderLinks /> */}
      <Announcement />
    </header>
  );
}

export default Header;
