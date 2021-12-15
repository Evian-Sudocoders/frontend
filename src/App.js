import React from "react";

import { Switch, Route } from "react-router-dom";
import UpperSection from "./Components/LandingPage/UpperSection/UpperSection";

import Home from "./Containers/Home";

const App = () => {
  
    return (
      <UpperSection />
      // <Switch>
      //   <Route exact path="/">
      //     <Home />
      //   </Route>
      // </Switch>
    )
  
};

export default App;
