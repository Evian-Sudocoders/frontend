import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import LandingPage from "./Containers/LandingPage";
import Profile from "./Containers/Profile/Profile";
import StationInfo from "./Containers/StationInfo";
import HomePage from "./Containers/HomePage";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path={["/signin", "/signup"]} component={LandingPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/userhome" component={HomePage} />
        <Route path="/station" component={StationInfo} />
      </Switch>
    </>
  );
};

export default App;
