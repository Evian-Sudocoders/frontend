import React from "react";
import Button from "../../Button";
import styles from "./Station.module.css";

function Station() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.InfoContainer}>
        <div className={styles.StationName}>
          Loremi psum Electric Vehicle Charging Station
        </div>
        <div className={styles.StationAddress}>
          Opp Virwani Ind Est Jay Bharat Indl Est 2nd Flr, 44, Goregaon, Mumbai
        </div>
        <div className={styles.StationPoints}>
          <span className={styles.PointCount}>4</span> points
        </div>
      </div>
      <div className={styles.ButtonContainer}>
        <Button
          wrapperClass={styles.ButtonStyle}
          content="₹15-30/slot"
          onClick="/book"
        />
      </div>
    </div>
  );
}

export default Station;
