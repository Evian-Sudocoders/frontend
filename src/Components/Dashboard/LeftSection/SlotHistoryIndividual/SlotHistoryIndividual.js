import React from "react";
import styles from "./SlotHistoryIndividual.module.css";


function SlotHistoryIndividual({slotDetails}) {

  let statusClass = `${styles.SlotStatus}`;

  switch(slotDetails.SlotStatus) {
    case "Pending":
      statusClass += ` ${styles.yellow}`;
      break;
      case "Failed":
      statusClass += ` ${styles.red}`;
      break;
      case "Success":
      statusClass += ` ${styles.green}`;
      break;
  }

  return (
    <div className={styles.SlotHistoryIndividualWrapper}>
      <p className={styles.SlotUserName}>{slotDetails.UserName}</p>
      <p className={styles.SlotVehicleNo}> {slotDetails.SlotVehicleNo}</p>
      <p className={styles.SlotTime}>{slotDetails.SlotTime}</p>
      <p className={`${statusClass}`}> {slotDetails.SlotStatus}</p>
    </div>
  );
}

export default SlotHistoryIndividual;
