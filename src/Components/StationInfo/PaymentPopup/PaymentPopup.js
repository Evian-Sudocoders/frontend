import React, { useEffect, useState } from "react";
import Select from "react-select";
import styles from "./PaymentPopup.module.css";
import { inputRequired, vechicleInputRequired } from "./InputRequired";
import { SlotTimeFun } from "./helper/SlotTimeFun";
import { EstimatedTimeCalcFun } from "./helper/EstimatedTimeCalcFun";

function PaymentPopup({ price }) {
  let tempData = new Array(48).fill(0);
  const [inputValues, setInputValues] = useState({
    batterySize: "100",
    chargingPower: "100",
    startingChargeLevel: "0",
    targetChargeLevel: "50",
    vehicleNumber: "100",
    bookedSlot: [],
  });

  const [finalChargingTime, setFinalChargingTime] = useState({
    hoursOfcharging: "0",
    minutesOfcharging: "0",
  });
  const [totalSlots, setTotalSlots] = useState([]);
  const [bookedSlot, setBookedSlot] = useState([16, 17, 45, 46, 47]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValues({ ...inputValues, [name]: value });
  };

  useEffect(() => {
    const data = EstimatedTimeCalcFun(inputValues, price);
    setFinalChargingTime(data);
  }, [inputValues]);

  useEffect(() => {
    for (let i = 0; i < tempData.length; i++) {
      const data = SlotTimeFun(i);

      let startTime = data.startTime.split(":");
      let startTimeHours = parseInt(startTime[0]);
      let startTimeMinutes = parseInt(startTime[1]);
      let currentDate = new Date();
      let disabled = false;
      if (currentDate.getHours() > startTimeHours || bookedSlot.includes(i)) {
        disabled = true;
      } else if (
        currentDate.getHours() == startTimeHours &&
        currentDate.getMinutes() > startTimeMinutes
      ) {
        disabled = true;
      }
      tempData[i] = {
        value: i,
        label: data.startTime + "-" + data.endTime,
        isDisabled: disabled,
      };
    }
    setTotalSlots(tempData);
  }, [bookedSlot]);

  const inputRequiredList = inputRequired.map((input, index) => {
    return (
      <div className={styles.InputWrapper} key={index}>
        <label className={styles.Label}>{input.label}</label>
        <input
          className={styles.Input}
          name={input.name}
          type="number"
          defaultValue={inputValues[input.name]}
          onChange={handleInput}
        />
      </div>
    );
  });

  const vechicleInputRequiredList = vechicleInputRequired.map(
    (input, index) => {
      return (
        <div className={styles.InputWrapper} key={index}>
          <label className={styles.Label}>{input.label}</label>
          <input
            className={styles.Input}
            name={input.name}
            type="text"
            defaultValue={inputValues[input.name]}
            onChange={handleInput}
          />
        </div>
      );
    }
  );

  return (
    <div className={styles.Wrapper}>
      <form>
        {inputRequiredList}
        <div>
          <p>Estimated Time</p>
          <p>
            <span>{finalChargingTime.hoursOfcharging}</span>H &nbsp;
            <span>{finalChargingTime.minutesOfcharging}M</span>
          </p>
        </div>
        {vechicleInputRequiredList}
        <Select
          isMulti
          name="bookingSlots"
          options={totalSlots}
          onChange={(newValue, action) => {
            if (action.action == "select-option") {
              let newData = inputValues.bookedSlot;
              newData.push(action.option.value);
              setInputValues({ ...inputValues, bookedSlot: newData });
              return;
            }
            if (action.action == "remove-value") {
              let newData = inputValues.bookedSlot;
              for (let i = 0; i < newData.length; i++) {
                if (newData[i] == action.removedValue.value) {
                  newData.splice(i, 1);
                  break;
                }
              }
              setInputValues({ ...inputValues, bookedSlot: newData });
              return;
            }
          }}
          //   className="basic-multi-select"
          //   classNamePrefix="select"
        />
      </form>
    </div>
  );
}

export default PaymentPopup;
