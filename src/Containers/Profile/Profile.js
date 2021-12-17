import React, { useState, useEffect } from "react";

import Styles from "./Profile.module.css";

import Navbar from "../../Components/Navbar/Navbar";
import About from "./../../Components/About";
import Preloader from "./../../Components/Preloader/Preloader";
import UserBookingList from "./../../Components/UserBookingList";

function Profile() {
  const openBookingSlide = (id, index) => {
    console.log(id, index);
    // Open booking slide
  };

  return (
    <>
      {true ? (
        <div className={Styles.Wrapper}>
          <Navbar />
          <div className={Styles.SubWrapper}>
            <div className={Styles.LeftWrapper}>
              <UserBookingList openBookingSlide={openBookingSlide} />
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
