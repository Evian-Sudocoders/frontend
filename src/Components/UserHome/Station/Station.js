import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../Button";
import styles from "./Station.module.css";

function Station({ data }) {
  const history = useHistory();

  let cost;
  if (data.numberOfChargingPoints) {
    cost = `₹${data.minCost}-${data.maxCost}/slot`;
  } else {
    cost = "-";
  }
  return (
    <div className={styles.Wrapper}>
      <div className={styles.InfoContainer}>
        <div className={styles.StationName}>{data.name}</div>
        <div className={styles.StationAddress}>{data.address}</div>
        <div className={styles.StationPoints}>
          <span className={styles.PointCount}>
            {data.numberOfChargingPoints}
          </span>{" "}
          points
        </div>
      </div>
      <div className={styles.ButtonContainer}>
        <Button
          wrapperClass={styles.ButtonStyle}
          content={cost}
          onClick={() => history.push(`/station/${data.id}`)}
        />
      </div>
    </div>
  );
}

export default Station;
