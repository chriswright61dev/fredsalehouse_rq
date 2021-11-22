import themeSelect from "../utilities/theme";
function Drinks() {
  const themeName = themeSelect();
  return (
    <div className={themeName}>
      <div className="container">
        <div className="info_column"> </div>
        <div className="info_column"> </div>
        <div className="info_column"> </div>
        <div className="info_column"> </div>
      </div>
    </div>
  );
}

export default Drinks;
