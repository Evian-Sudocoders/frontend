import React, { useState, useEffect } from "react";
import styles from "./UserHome.module.css";
import Select from "react-select";
import Station from "./Station";
import { getAllStationData } from "../../Services/station.service";
import { useSelector } from "react-redux";
import { selectStyles } from "./helpers/SelectStyles";

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
  const userData = useSelector((state) => state.userReducer.userData);

  const [stationData, setStationData] = useState([]);
  const [state, setState] = useState(userData.state);
  const [city, setCity] = useState(userData.city);

  const [stateIdx, setStateIdx] = useState(0);
  const [cityIdx, setCityIdx] = useState(0);

  useEffect(() => {
    const stateId = StateOptions?.findIndex(
      (stateLocal) => stateLocal.value == state
    );
    if (stateId >= 0) {
      const cityId = CityOptions[userData.state]?.findIndex(
        (cityLocal) => cityLocal.value === city
      );

      if (cityId >= 0) {
        setStateIdx(stateId);
        setCityIdx(cityId);
      }
    }
  }, [state, city, stationData]);

  useEffect(() => {
    fetchAllStations();
  }, [state, city]);

  const fetchAllStations = async () => {
    setStationData([]);
    const stationList = await getAllStationData(state, city);
    setStationData(stationList);
  };

  // console.log(stateIdx, cityIdx);

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
            styles={selectStyles}
            options={StateOptions}
            name="State"
            onChange={(newValue) => {
              setState(newValue.value);
            }}
            value={StateOptions[stateIdx]}
            blurInputOnSelect
            isSearchable={false}
          />
        </div>
        <div className={styles.SelectorDiv}>
          <Select
            closeMenuOnSelect={false}
            styles={selectStyles}
            options={state ? CityOptions[state] : []}
            name="City"
            onChange={(newValue) => {
              setCity(newValue.value);
            }}
            value={CityOptions[StateOptions[stateIdx]?.value][cityIdx]}
            blurInputOnSelect
            isSearchable={false}
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
