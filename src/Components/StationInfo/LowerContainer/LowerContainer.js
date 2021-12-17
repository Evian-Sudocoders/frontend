import React from "react";
import SlotComponent from "../SlotComponent";

import styles from "./LowerContainer.module.css";

const tempData = [];
for (let i = 0; i < 10; i++) {
  tempData.push({
    SlotNumber: "1",
    ChargingPower: "45",
    ChargingPrice: "15",
  });
}

function LowerContainer() {
  const SlotComponentList = tempData.map((data, index) => {
    return (
      <SlotComponent
        key={index}
        SlotNumber={data.SlotNumber}
        ChargingPower={data.ChargingPower}
        ChargingPrice={data.ChargingPrice}
      />
    );
  });

  return (
    <div className={styles.Wrapper}>
      <hr className={styles.Line} />
      <h2 className={styles.Heading}>Charging Points</h2>
      {SlotComponentList}
    </div>
  );
}

export default LowerContainer;