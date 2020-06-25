import React from "react";

import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <ul>
        <li className="nav--home">
          <h1>James Debnam</h1>
        </li>
        <li className="nav--projects">
          <h2>Projects</h2>
        </li>
        <li className="nav--contact">
          <h2>Contact</h2>
        </li>
      </ul>
    </div>
  );
}
