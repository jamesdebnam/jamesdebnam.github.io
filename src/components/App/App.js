import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import ContactPage from "../ContactPage/ContactPage";
import HomePage from "../HomePage/HomePage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
const body = document.querySelector("body");

export default function App() {
  // Grabs url path, to pass into activePage state for header css
  let { pathname } = useLocation();
  const [activePage, setActivePage] = useState(pathname);

  useEffect(() => {
    setActivePage(pathname);
  }, [pathname]);

  // Stops vertical overflow on homepage due to skew animation
  body.style.overflowY = activePage === "/" ? "hidden" : "auto";

  return (
    <div>
      <Header activePage={activePage} setActivePage={setActivePage} />

      <Switch>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/">
          <HomePage setActivePage={setActivePage} />
        </Route>
      </Switch>
    </div>
  );
}
