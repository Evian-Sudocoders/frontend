import React from "react";

import Styles from "./UserBookingCard.module.css";
import Button from "./../../Button/index";

function UserBookingCard({ data }) {
  const parseLable = (label) => {
    return `${label} :`;
  };

  const formatSlots = (slots) => {
    let startTime = slots[0];
    return slots.map((slot) => `${slot}`).join(", ");
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
            <div className={Styles.value}>{data.slots.join(", ")}</div>
          </div>
          <div className={Styles.ListInfoItem}>
            <h5 className={Styles.label}>{parseLable("Charges")}</h5>
            <div className={Styles.value}>{data.charges}</div>
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
