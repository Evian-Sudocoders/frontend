import React from "react";
import styles from "./SlotHistoryIndividual.module.css";


function SlotHistoryIndividual({slotDetails}) {
  return (
    <div className={styles.SlotHistoryIndividualWrapper}>
      <p className={styles.SlotUserName}>{slotDetails.UserName}</p>
      <p className={styles.SlotVehicleNo}> {slotDetails.SlotVehicleNo}</p>
      <p className={styles.SlotTime}>{slotDetails.SlotTime}</p>
      <p className={styles.SlotStatus}> {slotDetails.SlotStatus}</p>
    </div>
  );
}

export default SlotHistoryIndividual;
