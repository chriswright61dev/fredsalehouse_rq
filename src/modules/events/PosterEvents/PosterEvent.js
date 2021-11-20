import ImageContainer from "../../../components/ImageContainer/ImageContainer";
import "./PosterEvent.css";
function PosterEvent({ name, imageURL }) {
  return (
    <div className="poster-event">
      <ImageContainer type="square" source={imageURL} altText={name} />
    </div>
  );
}

export default PosterEvent;
