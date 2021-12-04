import "./HeaderBox.css";

function HeaderBox({ text }) {
  return (
    <div className="header_box">
      <p>{text}</p>
    </div>
  );
}

export default HeaderBox;
