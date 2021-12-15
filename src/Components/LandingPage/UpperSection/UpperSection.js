import React from "react";
import Button from "../../Button/Button";
import styles from "./UpperSection.module.css";
import { ReactComponent as Logo } from "../../../Assets/_General/evian.svg";
import { ReactComponent as EV1 } from "../../../Assets/LandingPage/ev1.svg";

function UpperSection() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.LogoWrapper}>
        <Logo className={styles.Logo} />
      </div>

      <div className={styles.SubWrapper}>
        <div className={styles.LeftContainer}>
          <div className={styles.Heading}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorem?</div>
          <div className={styles.Buttons}>
            <Button wrapperClass={styles.ButtonStyle1} content="Sign Up" onClick="\signUp" />
            <Button wrapperClass={styles.ButtonStyle2} isNotBorder content="Sign In" onClick="\signIn"  mainColor={"linear-gradient(63.31deg, #00D1FF -9.99%, #06C4FF -9.98%, rgba(3, 195, 255, 0.23) 131.09%)"}/>
          </div>
        </div>

        <div className={styles.RightContainer}>
          <EV1 className={styles.Ev1} />
        </div>
      </div>
    </div>
  );
}

export default UpperSection;
