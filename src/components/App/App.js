import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import ContactPage from "../ContactPage/ContactPage";
import HomePage from "../HomePage/HomePage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";

export default function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}
