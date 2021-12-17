import React, { useEffect, useState } from "react";
import Select from "react-select";
import styles from "./PaymentPopup.module.css";
import { inputRequired, vechicleInputRequired } from "./InputRequired";
import { SlotTimeFun } from "./helper/SlotTimeFun";
import { EstimatedTimeCalcFun } from "./helper/EstimatedTimeCalcFun";
import { selectColorStyles } from "./helper/ColorStyles";
import Button from "../../Button";

function PaymentPopup({ price }) {
  let tempData = new Array(48).fill(0);
  const [inputValues, setInputValues] = useState({
    batterySize: "40",
    chargingPower: "80",
    startingChargeLevel: "20",
    targetChargeLevel: "80",
    vehicleNumber: "AB 01 AB 1234",
    bookedSlot: [],
    finalPrice: "0",
  });

  const [finalChargingTime, setFinalChargingTime] = useState({
    hoursOfcharging: "0",
    minutesOfcharging: "0",
  });
  const [totalSlots, setTotalSlots] = useState([]);
  const [bookedSlot, setBookedSlot] = useState([16, 17]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValues);
    //RazorPay Integration
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
          style={{
            width: `calc(${
              inputValues[input.name].toString().length
            }ch + 4rem)`,
          }}
        />
      </div>
    );
  });

  const vechicleInputRequiredList = vechicleInputRequired.map(
    (input, index) => {
      return (
        <div className={styles.InputWrapper} key={index}>
          <label className={`${styles.Label} ${styles.LowerHeading}`}>
            {input.label}
          </label>
          <input
            className={styles.Input}
            name={input.name}
            type="text"
            defaultValue={inputValues[input.name]}
            onChange={handleInput}
            style={{
              width: `calc(${
                inputValues[input.name].toString().length
              }ch - 2.7ch + 4rem)`,
            }}
          />
        </div>
      );
    }
  );

  return (
    <div className={styles.Wrapper}>
      <form>
        {inputRequiredList}
        <div className={styles.TimeWrapper}>
          <p>Estimated Time</p>
          <p className={styles.EstimatedTime}>
            <span>{finalChargingTime.hoursOfcharging}</span>&nbsp;H&nbsp;
            <span>{finalChargingTime.minutesOfcharging}&nbsp;M</span>
          </p>
        </div>
        {vechicleInputRequiredList}
        <div className={styles.SlotWrapper}>
          <p className={styles.LowerHeading}>Slot:</p>
          <Select
            isMulti
            name="bookingSlots"
            options={totalSlots}
            styles={selectColorStyles}
            isClearable={false}
            placeholder="Select Slots"
            onChange={(newValue, action) => {
              if (action.action == "select-option") {
                let newData = inputValues.bookedSlot;
                newData.push(action.option.value);
                setInputValues({ ...inputValues, bookedSlot: newData });
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
              }
              setInputValues({
                ...inputValues,
                finalPrice: newValue.length * price,
              });
            }}
          />
        </div>
        <Button
          content={`Book for ₹${inputValues.finalPrice}`}
          mainColor="var(--blue-gradient)"
          wrapperClass={styles.Button}
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default PaymentPopup;
