import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";
import "./HomePage.css";

export default function HomePage({ setActivePage }) {
  return (
    <div className="home-page">
      <img src="/my-face.png" alt="my face" className="home-page-img" />
      <div className="content">
        <h3 className="content__title">Front-end Web Developer</h3>
        <p className="content__subtitle">Based in South-East London</p>
        <a href={process.env.PUBLIC_URL + "/james-debnam-cv.pdf"} download>
          <Button className="content__button" text="My CV" />
        </a>
        <Link to="/projects">
          <Button
            className="content__button"
            text="My Projects"
            handleClick={() => setActivePage("projects")}
          />
        </Link>
      </div>
      <svg className="semi-circle__left" width="500" height="500">
        <g transform="rotate(225 250 250)">
          <path d="M0,250 a1,1 0 0,0 500,0" fill="white" />
        </g>{" "}
      </svg>
      <svg className="semi-circle__right" width="500" height="500">
        <g transform="rotate(45 250 250)">
          <path d="M0,250 a1,1 0 0,0 500,0" fill="white" />
        </g>
      </svg>
      <svg className="line-svg" width="600px" height="600px">
        <line
          x1="600"
          y1="600"
          x2="0"
          y2="0"
          stroke="white"
          stroke-width="2px"
        />
      </svg>
      <svg
        className="blob"
        viewBox="0 0 200 200"
        height="1000px"
        width="1000px"
      >
        <path
          d="M51.2,-59C64.2,-50.1,71.2,-31.9,73.9,-13.5C76.6,4.9,75,23.7,66.9,39.4C58.8,55.1,44.1,67.9,27.4,73C10.7,78.1,-8,75.6,-22,67.5C-36.1,59.3,-45.6,45.5,-53,31.3C-60.4,17,-65.8,2.2,-62.4,-10C-59,-22.2,-47,-31.9,-35.1,-41C-23.3,-50.1,-11.6,-58.6,3.7,-63C19.1,-67.5,38.2,-67.9,51.2,-59Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className="blob blob2"
        viewBox="0 0 200 200"
        height="1000px"
        width="1000px"
        viewBox="0 0 200 200"
      >
        <path
          d="M39.3,-53.9C49.3,-46.9,54.5,-33.2,60.7,-18.6C66.9,-4.1,74.2,11.2,71.3,24.2C68.5,37.2,55.5,47.8,41.9,58.9C28.4,69.9,14.2,81.3,-2,84.1C-18.2,86.8,-36.4,81,-45.4,68.5C-54.4,55.9,-54.2,36.8,-59.3,19.6C-64.3,2.5,-74.6,-12.5,-72.3,-24.7C-70.1,-36.9,-55.2,-46.2,-41.1,-51.8C-26.9,-57.4,-13.5,-59.2,0.6,-60C14.7,-60.9,29.4,-60.8,39.3,-53.9Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className="blob blob3"
        viewBox="0 0 200 200"
        height="1000px"
        width="1000px"
      >
        <path
          d="M27.9,-44.9C34.2,-39.5,35.8,-28.3,42,-18.2C48.1,-8.1,58.8,1,58.1,8.6C57.4,16.2,45.3,22.5,36.7,31.3C28.2,40.1,23.3,51.5,13.9,60.1C4.4,68.7,-9.6,74.5,-23.8,73.7C-38.1,72.9,-52.5,65.5,-58.5,53.5C-64.5,41.5,-61.9,25,-65,8.9C-68,-7.3,-76.6,-23.1,-74,-35.9C-71.5,-48.8,-57.7,-58.6,-43.5,-60.4C-29.3,-62.3,-14.7,-56.1,-1.9,-53.1C10.9,-50.2,21.7,-50.4,27.9,-44.9Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}
