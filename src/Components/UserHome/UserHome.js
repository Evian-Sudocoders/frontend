import React from "react";
import styles from "./UserHome.module.css";
import Select from "react-select";
import Station from "./Station";

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

const StateOptions = [
  { value: "north-indian", label: "Gujarat" },
  { value: "south-indian", label: "Maharashtra" },
  { value: "chinese", label: "UP" },
  { value: "bengali", label: "Haryana" },
  { value: "italian", label: "Delhi" },
];

function UserHome() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.SelectorsWrapper}>
        <div className={styles.SelectorDiv}>
          <Select
            closeMenuOnSelect={false}
            styles={selectColorStyles}
            options={StateOptions}
          />
        </div>
        <div className={styles.SelectorDiv}>
          <Select
            closeMenuOnSelect={false}
            styles={selectColorStyles}
            options={StateOptions}
          />
        </div>
      </div>
      <div className={styles.Count}>
        <span className={styles.Value}>25</span> results found
      </div>
      <div className={styles.StationWrapper}>
        <Station />
        <Station />
        <Station />
      </div>
    </div>
  );
}

export default UserHome;
