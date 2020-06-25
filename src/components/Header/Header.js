import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <ul>
        <Link to="/" className="nav">
          <h1>James Debnam</h1>
        </Link>
        <Link to="/projects" className="nav">
          <h2>Projects</h2>
        </Link>
        <Link to="/contact" className="nav">
          <h2>Contact</h2>
        </Link>
      </ul>
    </div>
  );
}
