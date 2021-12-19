import React from "react";

import styles from "./BookingDetails.module.css";

import { ReactComponent as Car } from "../../Assets/Profile/SlideCar.svg";
import { ReactComponent as CarBg } from "../../Assets/Profile/CarBg.svg";
import { SlotTimeFun } from "../StationInfo/PaymentPopup/helper/SlotTimeFun";
import Button from "./../Button/index";
import { Redirect, useLocation } from "react-router-dom";

function BookingDetails({
  isOpen = false,
  bookingDetails = {
    id: 0,
    username: "Abc Xyz",
    vehicle_number: "MH 12 ABC 1234",
    station: `Lorem Ipsum Electric Vehicle Charging Station`,
    date: new Date(),
    address: `Opp Virwani Ind Est Jay Bharat Indl Est 2nd Flr, 44, Goregaon (east), Surat`,
    pointNo: Math.floor(Math.random() * 6) + 1,
    slots: Array(Math.floor(Math.random() * 6) + 1)
      .fill(Math.floor(Math.random() * 15))
      .map((x, index) => x + index),
    charges: Math.floor(Math.random() * 100),
    status: "pending",
  },
  markSuccessFun,
}) {
  const Location = useLocation();

  return (
    <>
      {!isOpen && Location.pathname == "/booking" && <Redirect to="/profile" />}
      <div
        className={styles.Wrapper}
        style={{
          transform:
            isOpen && Location.pathname == "/booking"
              ? "translatex(0)"
              : "translatex(100%)",
        }}
      >
        <CarBg className={styles.CarBg} preserveAspectRatio="xMinYMin slice" />
        <Car className={styles.Car} />
        <div className={styles.Content}>
          <h3 className={styles.Title}>{bookingDetails.station}</h3>
          <h5 className={styles.Date}>
            {bookingDetails.date.toLocaleDateString()}
          </h5>
          <p className={styles.Address}>{bookingDetails.address}</p>

          <div className={styles.ListDataWrapper}>
            <div className={styles.ListItem}>
              <div className={styles.ListItemLable}>Point No :</div>
              <div className={styles.ListItemValue}>
                {bookingDetails.pointNo}
              </div>
            </div>
            <div className={styles.ListItem}>
              <div className={styles.ListItemLable}>Slots :</div>
              <div className={styles.ListItemValue}>
                {SlotTimeFun(bookingDetails.slots[0]).startTime +
                  "-" +
                  SlotTimeFun(
                    bookingDetails.slots[bookingDetails.slots.length - 1]
                  ).endTime}
              </div>
            </div>
            <div className={styles.ListItem}>
              <div className={styles.ListItemLable}>Charges :</div>
              <div className={styles.ListItemValue}>
                {bookingDetails.charges + " ₹"}
              </div>
            </div>
          </div>
          <div className={styles.ListItem + " " + styles.Status}>
            <div className={styles.ListItemLable}>Status :</div>
            <div className={styles.ListItemValue}>{bookingDetails.status}</div>
          </div>
          {bookingDetails.status === "pending" ? (
            <div className={styles.ButtonWrapper}>
              <Button
                content={"Mark as Done"}
                onClick={() => {
                  markSuccessFun(bookingDetails.id);
                }}
                mainColor={
                  "linear-gradient(84.96deg, #2AD100 -11.09%, rgba(0, 255, 25, 0.63) 155.85%)"
                }
                wrapperClass={styles.Button}
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default BookingDetails;
