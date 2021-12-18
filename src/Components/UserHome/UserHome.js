import React, { useState, useEffect } from "react";
import styles from "./UserHome.module.css";
import Select from "react-select";
import Station from "./Station";
import { getAllStationData } from "../../Services/station.service";

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
  { value: "Gujarat", label: "Gujarat" },
  { value: "UP", label: "UP" },
  { value: "Haryana", label: "Haryana" },
  { value: "Delhi", label: "Delhi" },
];

const CityOptions = {
  Gujarat: [
    { value: "Surat", label: "Surat" },
    { value: "Ahmedabad", label: "Ahmedabad" },
  ],
  UP: [
    { value: "Agra", label: "Agra" },
    { value: "Kanpur", label: "Kanpur" },
  ],
  Haryana: [
    { value: "Gurgaon", label: "Gurgaon" },
    { value: "Karnal", label: "Karnal" },
  ],
  Delhi: [
    { value: "Lajpat Nagar", label: "Lajpat Nagar" },
    { value: "Safdarjung", label: "Safdarjung" },
  ],
};

function UserHome() {
  const [stationData, setStationData] = useState([]);
  const [state, setState] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    fetchAllStations();
  }, [state, city]);

  const fetchAllStations = async () => {
    const stationList = await getAllStationData(state, city);
    setStationData(stationList);
  };

  console.log(stationData);

  let count = 0;
  const list = stationData.stations?.map((station, id) => {
    count++;
    return <Station key={id} data={station} />;
  });

  return (
    <div className={styles.Wrapper}>
      <div className={styles.SelectorsWrapper}>
        <div className={styles.SelectorDiv}>
          <Select
            closeMenuOnSelect={false}
            styles={selectColorStyles}
            options={StateOptions}
            name="State"
            onChange={(newValue, action) => {
              setState(newValue.value);
            }}
          />
        </div>
        <div className={styles.SelectorDiv}>
          <Select
            closeMenuOnSelect={false}
            styles={selectColorStyles}
            options={state ? CityOptions[state] : []}
            name="City"
            onChange={(newValue, action) => {
              setCity(newValue.value);
            }}
          />
        </div>
      </div>
      <div className={styles.Count}>
        <span className={styles.Value}>{count}</span> results found
      </div>
      <div className={styles.StationWrapper}>{list}</div>
    </div>
  );
}

export default UserHome;
