
import React from "react";

import "./Skills.css";

const skills = {
  Languages: ["TypeScript", "Lua", "Python", "JavaScript"],
  Databases: ["SQLite", "PostgreSQL", "Mongo"],
  Tools: ["VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch", "Git", "Font Awesome"],
  Other: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"],
  Frameworks: ["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"],
};

export default function Skills() {
  return (
   
    <section className="skills-section" id="skills">
      <h2 className="bottom-title">#skills</h2>

      <div className="skills-decor">
        <div className="dot-grid"></div>
        <div className="dot-grid"></div>
      </div>

      <div className="skills-container">
        {Object.entries(skills).map(([category, items], idx) => (
          <div key={idx} className="skills-category">
            <h3 className="category-title">{category}</h3>
            <ul className="category-list">
              {items.map((item, i) => (
                <li key={i} className="skill-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="exploring-section">
        <h3 className="exploring-title">Currently : </h3>
        <p className="exploring-text">
          I am currently exploring enterprise platforms like ServiceNow and
          experimenting with other technologies to keep learning and building
          smarter solutions.
        </p>
      </div>
    </section>

  );
}