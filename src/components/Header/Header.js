import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Menu from "react-burger-menu/lib/menus/slide";

export default function Header({ activePage, setActivePage }) {
  return (
    <div className="header">
      <ul className="header-list">
        <Link
          to="/"
          className={activePage === "/" ? "nav nav--active" : "nav"}
          onClick={() => setActivePage("/")}
        >
          <h1>James Debnam</h1>
        </Link>
        <Link
          to="/projects"
          className={activePage === "/projects" ? "nav nav--active" : "nav"}
          onClick={() => setActivePage("/projects")}
        >
          <h2>Projects</h2>
        </Link>
        <Link
          to="/contact"
          className={activePage === "/contact" ? "nav nav--active" : "nav"}
          onClick={() => setActivePage("/contact")}
        >
          <h2>Contact</h2>
        </Link>
      </ul>

      <Link
        to="/"
        className="nav mobile-header"
        onClick={() => setActivePage("/")}
      >
        <h1>James Debnam</h1>
      </Link>
      <Menu width={"60vw"}>
        <Link
          to="/"
          className={activePage === "/" ? "nav nav--active" : "nav"}
          onClick={() => setActivePage("/")}
        >
          <h1>James Debnam</h1>
        </Link>
        <Link
          to="/projects"
          className={activePage === "/projects" ? "nav nav--active" : "nav"}
          onClick={() => setActivePage("/projects")}
        >
          <h2>Projects</h2>
        </Link>
        <Link
          to="/contact"
          className={activePage === "/contact" ? "nav nav--active" : "nav"}
          onClick={() => setActivePage("/contact")}
        >
          <h2>Contact</h2>
        </Link>
      </Menu>
    </div>
  );
}
