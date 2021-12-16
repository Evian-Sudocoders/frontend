import React from "react";
import styles from "./Navbar.module.css";

import { ReactComponent as Logo } from "../../Assets/_General/evian.svg";

function Navbar() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.SubWrapper}>
        <div className={styles.LeftWrapper}>
          <Logo className={styles.Logo} />
        </div>
        <div className={styles.RightWrapper}>
          <img
            src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Default Profile Photo"
            className={styles.ProfilePhoto}
          />
          <span className={styles.UserName}>Rayna Franci</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
