import React from "react";
import styles from "./SlotHistory.module.css";

import SlotHistoryIndividual from "../SlotHistoryIndividual";
import { SlotTimeFun } from "../../../StationInfo/PaymentPopup/helper/SlotTimeFun";

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

function SlotHistory({ bookingsData, currentActivePoint }) {
  const slotList = bookingsData
    ?.filter((item) => {
      return (
        item.chargingPoint === (currentActivePoint ? currentActivePoint : 1)
      );
    })
    .map((slot, index) => {
      return (
        <SlotHistoryIndividual
          slotDetails={slot}
          key={index}
          timing={
            SlotTimeFun(slot.slots[0]).startTime +
            " - " +
            SlotTimeFun(slot.slots[slot.slots.length - 1]).endTime
          }
        />
      );
    });
  return (
    <div className={styles.SlotHistoryContainer}>
      {/* <p className={styles.SlotHistoryTitle}>Slot History</p> */}
      <SlotHistoryIndividual
        slotDetails={{
          userName: "Name",
          vehicleNumber: "Vehicle Number",
          status: "Status",
        }}
        timing={"Slot"}
        wrapperClass={styles.SlotHistoryHeadingContainer}
      />
      <div className={styles.SlotHistoryWrapper}>{slotList}</div>
    </div>
  );
}

export default SlotHistory;
