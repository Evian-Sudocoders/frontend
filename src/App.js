import React, { useEffect } from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getUser } from "./Services/user.service";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import LandingPage from "./Containers/LandingPage";
import Profile from "./Containers/Profile/Profile";
import StationInfo from "./Containers/StationInfo";
import HomePage from "./Containers/HomePage";
import Dashboard from "./Containers/Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import Preloader from "./Components/Preloader/Preloader";

const App = () => {
  const userData = useSelector((state) => state.userReducer.userData);
  const dispatch = useDispatch();

  const auth = getAuth();

  const location = useLocation();
  const history = useHistory();

  const [hasInitialised, setHasInitialised] = React.useState(false);

  useEffect(() => {
    if (userData) {
      if (!hasInitialised) {
        setHasInitialised(true);
      }
      if (
        history.location.pathname === "/" ||
        history.location.pathname === "/signin" ||
        history.location.pathname === "/signup"
      ) {
        if (userData.isStation) {
          history.push("/dashboard");
        } else {
          history.push("/userhome");
        }
      }
    }
  }, [userData]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchAndSetUserData(user.accessToken, user.uid);
      } else {
        if (
          location.pathname !== "/" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/signin"
        ) {
          history.push("/");
        }
        setHasInitialised(true);
      }
    });
  }, []);

  const fetchAndSetUserData = async (accessToken, uid) => {
    const userdata = await getUser(accessToken);

    dispatch({
      type: "UPDATE_USER_DATA",
      data: { ...userdata, accessToken, uid },
    });
  };

  return (
    <>
      {hasInitialised ? (
        <>
          <ToastContainer bodyClassName="ToastBody" />
          <Switch>
            <Route
              exact
              path={["/signin", "/signup", "/"]}
              component={LandingPage}
            />
            <Route path={["/profile", "/booking"]} component={Profile} />
            <Route path="/userhome" component={HomePage} />
            <Route path="/station/:stationID" component={StationInfo} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default App;
