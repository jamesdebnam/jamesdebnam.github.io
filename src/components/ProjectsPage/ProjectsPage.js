import React from "react";

import todos from "../../pictures/todos.png";
import "./ProjectsPage.css";

function ProjectCard({ title, features, technologies }) {
  return (
    <div className="project-card">
      <h3 className="title">{title}</h3>
      <div className="features">
        <h4>Notable Features</h4>
        <ul>
          {features.map((item) => (
            <li className="feature">{item}</li>
          ))}
        </ul>
      </div>
      <div className="technologies">
        <h4>Technologies Used</h4>
        <ul>
          {technologies.map((item) => (
            <li className="technology">{item}</li>
          ))}
        </ul>
      </div>

      <img src={todos} alt="screenshot" />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="projects">
      <ProjectCard
        title="MS Todo list clone"
        features={["sdfsdf", "sdff"]}
        technologies={["React", "Redux"]}
      />
    </div>
  );
}
