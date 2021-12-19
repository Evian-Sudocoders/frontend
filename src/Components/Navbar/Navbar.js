import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import styles from "./Navbar.module.css";

import { ReactComponent as Logo } from "../../Assets/_General/evian.svg";
import DefaultImage from "../../Assets/_General/DefaultImg.png";

function Navbar() {
  const userData = useSelector((state) => state.userReducer.userData);
  const history = useHistory();

  const handleClickHomePage = () => {
    if (userData) {
      history.push(`/home`);
    } else {
      history.push(`/`);
    }
  };

  const handleClickProfile = () => {
    history.push(`/profile`);
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.SubWrapper}>
        <div className={styles.LeftWrapper} onClick={handleClickHomePage}>
          <Logo className={styles.Logo} />
        </div>
        <div className={styles.RightWrapper} onClick={handleClickProfile}>
          <img
            src={
              userData.profilePicture ? userData.profilePicture : DefaultImage
            }
            alt="Default Profile Photo"
            className={styles.ProfilePhoto}
            onLoad={(e) => {
              e.target.style.opacity = "1";
            }}
          />
          <span className={styles.UserName}>{userData?.name}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
