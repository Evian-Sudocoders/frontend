import React from "react";
import styles from "./Homepage.module.css";
import Navbar from "../../Components/Navbar";
import UserHome from "../../Components/UserHome";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className={styles.Wrapper}>
        <UserHome />
      </div>
    </>
  );
}

export default HomePage;
