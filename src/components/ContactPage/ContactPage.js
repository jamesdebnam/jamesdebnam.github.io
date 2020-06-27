import React from "react";

import "./ContactPage.css";
import github from "./gh.png";
import gmail from "./gm.png";
import phone from "./p.png";
import linkedIn from "./li.png";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <h2 className="contact-title">Contact me</h2>
      <ul>
        <li className="contact-list-item">
          <img src={github} alt="GitHub"></img>
          <a href="https://github.com/jamesdebnam">My GitHub</a>
        </li>
        <li className="contact-list-item">
          <img src={linkedIn} alt="linkedIn"></img>
          <a href="https://www.linkedin.com/in/james-debnam-06376b15b/">
            My linkedIn
          </a>
        </li>
        <li className="contact-list-item">
          <img src={gmail} alt="Gmail"></img>
          jamesdebnam@gmail.com
        </li>
        <li className="contact-list-item">
          <img src={phone} alt="Phone number"></img>
          07158290536
        </li>
      </ul>
    </div>
  );
}
