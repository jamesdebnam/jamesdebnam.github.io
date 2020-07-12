import React from "react";

import "./TechStack.css";
import bs from "./bootstrap.svg";
import py from "./py.png";
import html from "./html.png";
import css from "./css.png";
import js from "./js.png";
import react from "./react.png";
import redux from "./redux.png";
import node from "./node.png";

export default function TechStack({ tech, setTech }) {
  const setClass = (name) => {
    if (tech === name) return "tech-icon tech-icon--active";
    return "tech-icon";
  };

  return (
    <>
      <h3 className="tech-title">Click Icon to filter by Tech</h3>
      <div className="tech-stack">
        <img
          onClick={() => (tech !== "JS" ? setTech("JS") : setTech(""))}
          className={setClass("JS")}
          src={js}
          alt="JS"
        />
        <img
          onClick={() => (tech !== "React" ? setTech("React") : setTech(""))}
          className={setClass("React")}
          src={react}
          alt="React"
        />
        <img
          onClick={() => (tech !== "Redux" ? setTech("Redux") : setTech(""))}
          className={setClass("Redux")}
          src={redux}
          alt="Redux"
        />
        <img
          onClick={() =>
            tech !== "Node.js" ? setTech("Node.js") : setTech("")
          }
          className={setClass("Node.js")}
          src={node}
          alt="Node.js"
        />
        <img
          onClick={() => (tech !== "HTML" ? setTech("HTML") : setTech(""))}
          className={setClass("HTML")}
          src={html}
          alt="HTML"
        />
        <img
          onClick={() => (tech !== "CSS" ? setTech("CSS") : setTech(""))}
          className={setClass("CSS")}
          src={css}
          alt="CSS"
        />
        <img
          onClick={() =>
            tech !== "Bootstrap" ? setTech("Bootstrap") : setTech("")
          }
          className={setClass("Bootstrap")}
          src={bs}
          alt="Bootstrap"
        />
        <img
          onClick={() => setTech("Python")}
          className={setClass("Python")}
          src={py}
          alt="Python"
        />
      </div>
    </>
  );
}
