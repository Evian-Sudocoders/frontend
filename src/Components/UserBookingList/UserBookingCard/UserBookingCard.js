import React from "react";

import Styles from "./UserBookingCard.module.css";
import Button from "./../../Button/index";
import { SlotTimeFun } from "./../../StationInfo/PaymentPopup/helper/SlotTimeFun";

function UserBookingCard({ data }) {
  const parseLable = (label) => {
    return `${label} :`;
  };

  const StatusButton = ({ status }) => {
    return (
      <Button
        content={status}
        onClick={null}
        mainColor={
          status === "pending"
            ? "var(--blue-gradient)"
            : "var(--success-gradient)"
        }
        wrapperClass={Styles.StatusButton}
      />
    );
  };

  return (
    <div className={Styles.Wrapper}>
      <div className={Styles.LeftSection}>
        <div className={Styles.TopInfoWrapper}>
          <h3 className={Styles.StationName}>{data.station}</h3>
          <div className={Styles.Address}>{data.address}</div>
        </div>
        <div className={Styles.BottomInfoWrapper}>
          <div className={Styles.ListInfoItem}>
            <h5 className={Styles.label}>{parseLable("Point no")}</h5>
            <div className={Styles.value}>{data.pointNo}</div>
          </div>
          <div className={Styles.ListInfoItem}>
            <h5 className={Styles.label}>{parseLable("Slot(s) Timing")}</h5>
            <div className={Styles.value}>
              {SlotTimeFun(data.slots[0]).startTime +
                "-" +
                SlotTimeFun(data.slots[data.slots.length - 1]).endTime}
            </div>
          </div>
          <div className={Styles.ListInfoItem}>
            <h5 className={Styles.label}>{parseLable("Charges")}</h5>
            <div className={Styles.value}>{data.charges +  " ₹"}</div>
          </div>
        </div>
      </div>
      <div className={Styles.RightSection}>
        <StatusButton status={data.status} />
        <div className={Styles.Date}>{data.date.toLocaleDateString()}</div>
      </div>
    </div>
  );
}

export default UserBookingCard;
