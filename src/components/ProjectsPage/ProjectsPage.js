import React, { useState } from "react";

import "./ProjectsPage.css";
import Button from "../Button/Button";
import { projects } from "./projects";
import TechStack from "../TechStack/TechStack";

function ProjectCard({
  title,
  features,
  technologies,
  image,
  tech,
  codeLink,
  projLink,
}) {
  function setClass(technologyArr) {
    for (let item of technologyArr) {
      if (item === tech) return "project-card project-card--active";
    }
    return "project-card";
  }

  return (
    <div className={setClass(technologies)}>
      <h3 className="project-card__title">{title}</h3>
      <div className="project-card__features">
        <h4 className="project-card__subtitle">Notable Features</h4>
        <ul className="list-item">
          {features.map((item, index) => (
            <li key={index} className="project-card__feature">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="project-card__technologies">
        <h4 className="project-card__subtitle">Technologies Used</h4>
        <ul className="list-item">
          {technologies.map((item, index) => (
            <li key={index} className="project-card__technology">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <img className="screenshot" src={image} alt="screenshot" />
      <div className="project-card__buttons">
        <a className="project-card__button" href={codeLink}>
          <Button text="See the code" />
        </a>
        <a className="project-card__button" href={projLink}>
          <Button text="See the project" />
        </a>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [tech, setTech] = useState("");

  return (
    <>
      <TechStack setTech={setTech} tech={tech} />
      <div className="projects">
        {projects.map(
          (
            { title, features, technologies, image, codeLink, projLink },
            index
          ) => {
            return (
              <ProjectCard
                title={title}
                features={features}
                technologies={technologies}
                image={image}
                key={index}
                tech={tech}
                codeLink={codeLink}
                projLink={projLink}
              />
            );
          }
        )}
      </div>
      <p className="footer">
        Icons taken from <a href="https://icons8.com">Icons8</a>
      </p>
    </>
  );
}
