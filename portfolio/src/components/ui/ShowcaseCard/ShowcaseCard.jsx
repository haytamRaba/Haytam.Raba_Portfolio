import "./showcaseCard.css";

export default function ShowcaseCard({
  title,
  category,
  image,
  overview,
  tools = [],
  project_for,
  duration,
  link,
  description
}) {
  return (
    <div className="showcase-card">

      <div className="card-image">
        <img src={image} alt={title} />
        <span className="category">{category}</span>
      </div>

      <div className="card-body">
        <h3>{title}</h3>
        <p className="overview">{overview}</p>

        <div className="meta">
          <span>Project For: {project_for}</span>
          <span>{duration}</span>
        </div>

        <div className="tools">
          {tools.map((tool, i) => (
            <span key={i}>{tool}</span>
          ))}
        </div>

        <p className="description">{description}</p>

        {link && (
  <div className="buttons">
    {link.live && (
      <a href={link.live} target="_blank" rel="noreferrer" className="btn">
        View Live <span className="arrow">→</span> 
      </a>
    )}
    {link.code && (
      <a href={link.code} target="_blank" rel="noreferrer" className="btn btn-secondary">
        View Code <span className="arrow">→</span> 
      </a>
    )}
  </div>
)}
      </div>
    </div>
  );
}