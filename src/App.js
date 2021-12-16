import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import LandingPage from "./Containers/LandingPage";
import UserHome from "./Components/UserHome";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path={["/signin", "/signup"]} component={LandingPage} />
        <Route path="/userhome" component={UserHome} />
      </Switch>
    </>
  );
};

export default App;
