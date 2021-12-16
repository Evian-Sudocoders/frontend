import React, { useState, useEffect } from "react";

import Styles from "./Profile.module.css";

import Navbar from "../../Components/Navbar/Navbar";
import About from "./../../Components/About";
import Preloader from "./../../Components/Preloader/Preloader";

function Profile() {
  return (
    <>
      {true ? (
        <div className={Styles.Wrapper}>
          <Navbar />
          <div className={Styles.SubWrapper}>
            <div className={Styles.SubListWrapper}>
              {/* <UserSubList /> */}
            </div>
            <div className={Styles.Line} />
            <div className={Styles.AboutWraper}>
              <About isStation={false} />
            </div>
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default Profile;
