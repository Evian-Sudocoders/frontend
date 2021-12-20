import React, { useEffect } from "react";
import {
  Switch,
  Route,
  useLocation,
  useHistory,
  Redirect,
} from "react-router-dom";
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
        history.push("/home");
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
            {userData ? (
              <>
                <Route path={["/profile", "/booking"]} component={Profile} />
                <Route path="/home" component={HomePage} />
                {!userData.isStation ? (
                  <Route path="/station/:stationID" component={StationInfo} />
                ) : null}
                {(location.pathname !== "/profile" &&
                  location.pathname !== "/booking" &&
                  !location.pathname.startsWith("/station") &&
                  location.pathname !== "/home") ||
                (location.pathname.startsWith("/station") &&
                  userData.isStation) ? (
                  <Redirect to="/home" />
                ) : null}
              </>
            ) : (
              <>
                <Route
                  exact
                  path={["/signin", "/signup", "/"]}
                  component={LandingPage}
                />
                {location.pathname !== "/signin" &&
                location.pathname !== "/signup" &&
                location.pathname !== "/" ? (
                  <Redirect to="/" />
                ) : null}
              </>
            )}
            {/* <Redirect to="/" /> */}
            {/* {userData ? <Redirect to="/home" /> : <Redirect to="/" />} */}
          </Switch>
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default App;
