import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import ContactPage from "../ContactPage/ContactPage";
import HomePage from "../HomePage/HomePage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";

export default function App() {
  const [activePage, setActivePage] = useState("home");

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
