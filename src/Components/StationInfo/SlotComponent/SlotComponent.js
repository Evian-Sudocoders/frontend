import React from "react";

import Button from "../../Button";
import styles from "./SlotComponent.module.css";
function SlotComponent({ SlotNumber, ChargingPower, ChargingPrice }) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.LeftWrapper}>
        <span className={styles.SlotNumber}>{SlotNumber}</span>&nbsp;|&nbsp;
        <span className={styles.ChargingPower}>{ChargingPower}</span>&nbsp;kW
      </div>
      <div className={styles.RightWrapper}>
        <Button
          wrapperClass={styles.ChargingPrice}
          content={`₹${ChargingPrice} / slot`}
          mainColor="var(--blue-gradient)"
        />
      </div>
    </div>
  );
}

export default SlotComponent;
