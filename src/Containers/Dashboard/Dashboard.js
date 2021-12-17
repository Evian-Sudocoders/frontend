import React from "react";
import styles from "./Dashboard.module.css";
import Navbar from "../../Components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className={styles.Wrapper}>
        <div className={styles.LeftWrapper}>
            
        </div>
        <div className={styles.RightWrapper}>

        </div>
      </div>
    </>
  );
}

export default Dashboard;
