import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../Button/Button";
import "./HomePage.css";

export default function HomePage({ setActivePage }) {
  return (
    <div className="home-page">
      <div className="content">
        <h3>Front-end Web Developer</h3>
        <p>Based in South-East London</p>
        <a href={process.env.PUBLIC_URL + "/james-debnam-cv.pdf"} download>
          <Button text="My CV" />
        </a>
        <Link to="/projects">
          <Button
            text="My Projects"
            handleClick={() => setActivePage("projects")}
          />
        </Link>
      </div>
      <motion.div
        animate={{ skewX: 180 }}
        transition={{ duration: 70, loop: Infinity }}
        className="background "
      ></motion.div>
      <motion.div
        animate={{ skewX: -180 }}
        transition={{ duration: 70, loop: Infinity }}
        className="background"
      ></motion.div>
      <motion.div
        animate={{ skewY: -180 }}
        transition={{ duration: 105, loop: Infinity }}
        className="background background-y"
      ></motion.div>
      <motion.div
        animate={{ skewY: 180 }}
        transition={{ duration: 105, loop: Infinity }}
        className="background background-y"
      ></motion.div>
    </div>
  );
}
