import React from "react";
import styles from "./SlotHistory.module.css";

import SlotHistoryIndividual from "../SlotHistoryIndividual";

const slotData = [
  {
    UserName: "UserName",
    SlotVehicleNo: "SlotVehicleNo",
    SlotTime: "SlotTime",
    SlotStatus: "SlotStatus",
  },
  {
    UserName: "Varsani",
    SlotVehicleNo: "HR 05 AM 0000",
    SlotTime: "02:00-02:30",
    SlotStatus: "Success",
  },
  {
    UserName: "Aakash",
    SlotVehicleNo: "HR 05 AM 0000",
    SlotTime: "02:00-02:30",
    SlotStatus: "Pending",
  },
  {
    UserName: "Harshil",
    SlotVehicleNo: "HR 05 AM 0000",
    SlotTime: "02:00-02:30",
    SlotStatus: "Failed",
  },
];

function SlotHistory() {

  const slotList = slotData?.map((slot, index) => {
    return <SlotHistoryIndividual slotDetails={slot} key={index} />;
  });
  return (
    <div className={styles.SlotHistoryContainer}>
      <p className={styles.SlotHistoryTitle}>Slot History</p>
      <div className={styles.SlotHistoryWrapper}>{slotList}</div>
    </div>
  );
}

export default SlotHistory;
