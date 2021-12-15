import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import LowerSection from "./Components/LandingPage/LowerSection/LowerSection";
import UpperSection from "./Components/LandingPage/UpperSection/UpperSection";

import Home from "./Containers/Home";
import LandingPage from "./Components/LandingPage/LandingPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
