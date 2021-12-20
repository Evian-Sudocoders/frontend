import React from "react";
import styles from "./SlotHistoryIndividual.module.css";
import { SlotTimeFun } from "./../../../StationInfo/PaymentPopup/helper/SlotTimeFun";
import useMediaQuery from "../../../../Utils/helper/useMediaQuery";

function SlotHistoryIndividual({ slotDetails, wrapperClass, timing }) {
  const [windowWidthState] = useMediaQuery();

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
    <div className={styles.SlotHistoryIndividualWrapper + " " + wrapperClass}>
      <p className={styles.SlotUserName}>{slotDetails.userName}</p>
      {windowWidthState > 500 && (
        <p className={styles.SlotVehicleNo}> {slotDetails.vehicleNumber}</p>
      )}
      <p className={styles.SlotTime}>{timing}</p>
      <p className={`${statusClass}`}> {slotDetails.status}</p>
    </div>
  );
}

export default SlotHistoryIndividual;
