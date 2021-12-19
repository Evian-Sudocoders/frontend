import React from "react";
import { useSelector } from "react-redux";

import styles from "./Homepage.module.css";

import Navbar from "../../Components/Navbar";
import UserHome from "../../Components/UserHome";
import Dashboard from "./../Dashboard/index";

function HomePage() {
  const userData = useSelector((state) => state.userReducer.userData);
  return (
    <div className={styles.Wrapper}>
      <Navbar />
      {userData.isStation ? <Dashboard /> : <UserHome />}
    </div>
  );
}

export default HomePage;
