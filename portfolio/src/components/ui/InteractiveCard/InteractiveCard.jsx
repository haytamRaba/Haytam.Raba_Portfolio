import { useState } from "react";
import "./interactiveCard.css";

export default function InteractiveCard({
  title,
  image,
  overview,
  description,
  tools = []
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`card ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <img src={image} alt={title} />

      <div className="overlay">
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>

      <div className="content">
        <p>{description}</p>

        <div className="tools">
          {tools.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}