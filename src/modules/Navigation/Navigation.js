import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav_links">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/events">What's On</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
