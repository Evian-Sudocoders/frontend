import React from "react";
import styles from "./Dashboard.module.css";
import Navbar from "../../Components/Navbar";
import Select from "react-select";
import SlotHistory from "../../Components/Dashboard/LeftSection/SlotHistory";
import Highlight from "../../Components/Dashboard/RightSection/Highlight";
import PaymentHistory from "../../Components/Dashboard/RightSection/PaymentHistory";

const selectColorStyles = {
  control: (styles) => ({
    ...styles,
    fontSize: "var(--font-16)",
    border: "1px solid black",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      fontSize: "var(--font-16)",
      transition: "background-color 0.1s ease",
      ":active": {
        ...styles[":active"],
        // backgroundColor: "var(--orange-tertiary)",
      },
      ":hover": {
        ...styles[":hover"],
        // backgroundColor: "var(--orange-tertiary)",
      },
      ":visited": {
        ...styles[":visited"],
        // backgroundColor: "var(--orange-tertiary)",
      },
    };
  },
};

const PointOptions = [
  { value: "north-indian", label: "Point 1" },
  { value: "south-indian", label: "Point 2" },
  { value: "chinese", label: "Point 3" },
];

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className={styles.Wrapper}>
        <div className={styles.LeftWrapper}>
          <div className={styles.HeadWrapper}>Today's Booking</div>
          <div className={styles.SelectorWrapper}>
            <Select
              closeMenuOnSelect={false}
              styles={selectColorStyles}
              options={PointOptions}
            />
          </div>
          <div className={styles.SlotListWrapper}>
            <SlotHistory />
          </div>
        </div>

        <div className={styles.RightWrapper}>
          <div className={styles.HighlightWrapper}>
            <Highlight />
          </div>
          <div className={styles.PaymentHistoryWrapper}>
            <PaymentHistory />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
