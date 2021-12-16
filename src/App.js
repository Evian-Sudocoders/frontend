import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import LandingPage from "./Containers/LandingPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path={["/signin", "/signup"]} component={LandingPage} />
      </Switch>
    </>
  );
};

export default App;
