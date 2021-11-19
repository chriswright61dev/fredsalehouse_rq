import "./ImageContainer.css";
function ImageContainer({ type, source, altText }) {
  return (
    <div className={type}>
      <img src={source} alt={altText} />
    </div>
  );
}

export default ImageContainer;
