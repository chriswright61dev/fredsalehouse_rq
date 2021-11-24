import { Link } from "react-router-dom";
import "./Linkbox.css";
function LinkBox({ text, link }) {
  return (
    <Link to={link}>
      <div className="link_box">
        <p>{text}</p>
      </div>
    </Link>
  );
}

export default LinkBox;
