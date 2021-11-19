import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderVenueDescription from "./HeaderVenueDescription/HeaderVenueDescription";
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import NewsAnnouncement from "./NewsAnnouncement/NewsAnnouncement";

function Header() {
  return (
    <header>
      <HeaderLogo />
      <HeaderVenueDescription />
      <HeaderLinks />
      <NewsAnnouncement />
    </header>
  );
}

export default Header;
