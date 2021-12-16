import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../../Button/Button";
import styles from "./UpperSection.module.css";
import { ReactComponent as Logo } from "../../../Assets/_General/evian.svg";
import { ReactComponent as EV1 } from "../../../Assets/LandingPage/ev1.svg";

function UpperSection() {
  const history = useHistory();

  const goToSignUp = () => {
    history.push("/signup");
  };

  const goToSignIn = () => {
    history.push("/signin");
  };
  return (
    <div className={styles.Wrapper}>
      <div className={styles.LogoWrapper}>
        <Logo className={styles.Logo} />
      </div>

      <div className={styles.SubWrapper}>
        <div className={styles.LeftContainer}>
          <div className={styles.Heading}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
            dolorem?
          </div>
          <div className={styles.Buttons}>
            <Button
              wrapperClass={styles.ButtonStyle1}
              content="Sign Up"
              onClick={goToSignUp}
            />
            <Button
              wrapperClass={styles.ButtonStyle2}
              isNotBorder
              content="Sign In"
              onClick={goToSignIn}
            />
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
