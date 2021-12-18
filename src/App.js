import React from "react";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Switch, Route } from "react-router-dom";

import LandingPage from "./Containers/LandingPage";
import Profile from "./Containers/Profile/Profile";
import StationInfo from "./Containers/StationInfo";
import HomePage from "./Containers/HomePage";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Containers/Dashboard/Dashboard";

const App = () => {
  return (
    <>
      <ToastContainer bodyClassName="ToastBody" />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path={["/signin", "/signup"]} component={LandingPage} />
        <Route path={["/profile", "/booking"]} component={Profile} />
        <Route path="/userhome" component={HomePage} />
        <Route path="/station" component={StationInfo} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
};

export default App;
