import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import LandingPage from "./Containers/LandingPage";
import StationInfo from "./Containers/StationInfo";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/station">
          <StationInfo />
        </Route>
      </Switch>
    </>
  );
};

export default App;
