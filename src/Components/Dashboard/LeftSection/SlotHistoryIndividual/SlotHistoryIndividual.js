import React from "react";
import styles from "./SlotHistoryIndividual.module.css";

function SlotHistoryIndividual({ slotDetails }) {
  let statusClass = `${styles.SlotStatus}`;

  switch (slotDetails.status) {
    case "pending":
      statusClass += ` ${styles.yellow}`;
      break;
    case "failed":
      statusClass += ` ${styles.red}`;
      break;
    case "success":
      statusClass += ` ${styles.green}`;
      break;
  }

  return (
    <div className={styles.SlotHistoryIndividualWrapper}>
      <p className={styles.SlotUserName}>{slotDetails.userName}</p>
      <p className={styles.SlotVehicleNo}> {slotDetails.vehicleNumber}</p>
      <p className={styles.SlotTime}>{slotDetails.slots}</p>
      <p className={`${statusClass}`}> {slotDetails.status}</p>
    </div>
  );
}

export default SlotHistoryIndividual;
