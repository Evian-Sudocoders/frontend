import React from "react";

import styles from "./UpperContainer.module.css";
function UpperContainer({
  StationName,
  StationAddress,
  GMapLink,
  NumberOfPorts,
}) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.LeftWrapper}>
        <iframe
          src={GMapLink}
          allowfullscreen
          loading="lazy"
          className={styles.Map}
        />
        <div className={styles.StationInfoWrapper}>
          <h2>{StationName}</h2>
          <p>{StationAddress}</p>
          <div className={styles.PortsWrapperMobile}>
            <span className={styles.PortsSpan}>{NumberOfPorts}</span> Ports
          </div>
        </div>
      </div>
      <div className={styles.RightWrapper}>
        <span className={styles.PortsSpan}>{NumberOfPorts}</span> Ports
      </div>
    </div>
  );
}

export default UpperContainer;
