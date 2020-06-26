import React from "react";

import todos from "../../pictures/todos.png";
import "./ProjectsPage.css";
import Button from "../Button/Button";

function ProjectCard({ title, features, technologies }) {
  return (
    <div className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <div className="project-card__features">
        <h4 className="project-card__subtitle">Notable Features</h4>
        <ul className="list-item">
          {features.map((item) => (
            <li className="project-card__feature">{item}</li>
          ))}
        </ul>
      </div>
      <div className="project-card__technologies">
        <h4 className="project-card__subtitle">Technologies Used</h4>
        <ul className="list-item">
          {technologies.map((item) => (
            <li className="project-card__technology">{item}</li>
          ))}
        </ul>
      </div>

      <img className="screenshot" src={todos} alt="screenshot" />
      <div className="project-card__buttons">
        <Button className="project-card__button" text="See the code" />
        <Button className="project-card__button" text="See the project" />
      </div>
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
