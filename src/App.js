import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import LandingPage from "./Containers/LandingPage";
import Profile from "./Containers/Profile/Profile";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path={["/signin", "/signup"]} component={LandingPage} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </>
  );
};

export default App;
