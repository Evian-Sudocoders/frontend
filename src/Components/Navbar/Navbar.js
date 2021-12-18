import React from "react";
import styles from "./Navbar.module.css";
import { useHistory } from "react-router-dom";

import { ReactComponent as Logo } from "../../Assets/_General/evian.svg";
import { useSelector } from "react-redux";

function Navbar() {
  const userData = useSelector((state) => state.userReducer.userData);
  const history = useHistory();
  const handleClick = () => {
    history.push(`/userhome`);
  }

  return (
    <div className={styles.Wrapper}>
      <div className={styles.SubWrapper}>
        <div className={styles.LeftWrapper} onClick={handleClick}>
          <Logo className={styles.Logo} />
        </div>
        <div className={styles.RightWrapper}>
          <img
            src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Default Profile Photo"
            className={styles.ProfilePhoto}
          />
          <span className={styles.UserName}>{userData?.name}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
