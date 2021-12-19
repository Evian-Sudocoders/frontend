import React, { useEffect, useRef } from "react";

import Styles from "./StationChargingPointsListItem.module.css";

function StationChargingPointsListItem({
  data,
  isEditing,
  onChangeFun,
  keyIndex,
}) {
  const powerRef = useRef(456);
  const chargeRef = useRef(789);

  useEffect(() => {
    if (keyIndex === 1 && isEditing) {
      powerRef.current.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    powerRef.current.value = data.capacity;
    chargeRef.current.value = data.cost;
    updateWidth(powerRef.current);
    updateWidth(chargeRef.current);
  }, [data]);

  const handleChange = (e) => {
    updateWidth(e.target);

    if (isEditing && onChangeFun) {
      onChangeFun(keyIndex, {
        index: keyIndex,
        capacity: parseFloat(powerRef.current.value),
        cost: parseFloat(chargeRef.current.value),
      });
    }
  };

  const updateWidth = (elem) => {
    const width = elem.value.length * 0.8 + 2;
    elem.style.width = width + "em";
  };

  return (
    <div className={Styles.Wrapper}>
      <div className={Styles.LeftWrapper}>
        <h3 className={Styles.Id}>{data.index}</h3>
      </div>
      <div className={Styles.RightWrapper}>
        <div className={Styles.ListItemWrapper}>
          <h4 className={Styles.Label}>Power Capacity ( in kW ) :</h4>
          <input
            ref={powerRef}
            type="number"
            name="Power"
            value={data.capacity}
            onChange={handleChange}
            className={Styles.Input}
            disabled={!isEditing}
          />
        </div>
        <div className={Styles.ListItemWrapper + " " + Styles.ListItemWrapper2}>
          <h4 className={Styles.Label}>
            Charges ( per half an hour / slot ) :
          </h4>
          <input
            ref={chargeRef}
            type="number"
            name="Charges"
            defaultValue={data.cost}
            onChange={handleChange}
            className={Styles.Input}
            disabled={!isEditing}
          />
        </div>
      </div>
    </div>
  );
}

export default StationChargingPointsListItem;
