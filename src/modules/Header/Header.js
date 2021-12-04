import "./Header.css";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import { useEffect } from "react";
import HeaderVenueDescription from "./HeaderVenueDescription/HeaderVenueDescription";
import Announcement from "../../modules/news/Announcement";

function Header({ setHeaderReady, headerReady }) {
  useEffect(() => {
    setHeaderReady(true);
  }, []);
  if (headerReady) {
    return (
      <header className="animate_fade_in  duration1000">
        <HeaderLogo />
        <HeaderVenueDescription />
        <Announcement />
      </header>
    );
  } else {
    return null;
  }
}

export default Header;
