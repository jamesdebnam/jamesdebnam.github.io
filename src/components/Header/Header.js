import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ activePage, setActivePage }) {
  return (
    <div className="header">
      <ul>
        <Link
          to="/"
          className={activePage == "home" ? "nav nav--active" : "nav"}
          onClick={() => setActivePage("home")}
        >
          <h1>James Debnam</h1>
        </Link>
        <Link
          to="/projects"
          className={activePage == "projects" ? "nav nav--active" : "nav"}
          onClick={() => setActivePage("projects")}
        >
          <h2>Projects</h2>
        </Link>
        <Link
          to="/contact"
          className={activePage == "contact" ? "nav nav--active" : "nav"}
          onClick={() => setActivePage("contact")}
        >
          <h2>Contact</h2>
        </Link>
      </ul>
    </div>
  );
}
