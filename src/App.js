import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import LowerSection from "./Components/LandingPage/LowerSection/LowerSection";
import UpperSection from "./Components/LandingPage/UpperSection/UpperSection";

import Home from "./Containers/Home";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          {/* <LandingPage /> */}
          <Navbar />
        </Route>
      </Switch>
    </>
  );
};

export default App;
