import "./lightbox.css";

export default function Lightbox({ image, onClose }) {
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <img className="lightbox-img" src={image} alt="" />
    </div>
  );
}
