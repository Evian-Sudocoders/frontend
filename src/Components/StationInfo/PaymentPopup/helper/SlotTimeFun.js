export function SlotTimeFun(slotNumber) {
  if (slotNumber < 0 || slotNumber > 47) {
    return "Invalid Slot Number";
  }
  let startTime, endTime;
  let hour = Math.floor(slotNumber / 2);
  let hourSLotNumber = slotNumber % 2;
  if (hourSLotNumber) {
    startTime = hour + ":30";
    endTime = hour + 1 + ":00";
  } else {
    startTime = hour + ":00";
    endTime = hour + ":30";
  }
  return { startTime, endTime };
}
