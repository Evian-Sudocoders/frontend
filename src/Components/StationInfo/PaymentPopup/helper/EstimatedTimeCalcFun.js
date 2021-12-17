export function EstimatedTimeCalcFun(inputValues) {
  let { batterySize, chargingPower, startingChargeLevel, targetChargeLevel } =
    inputValues;
  batterySize = parseInt(batterySize);
  chargingPower = parseInt(chargingPower);
  startingChargeLevel = parseInt(startingChargeLevel);
  targetChargeLevel = parseInt(targetChargeLevel);

  if (
    batterySize < 0 ||
    chargingPower < 0 ||
    startingChargeLevel < 0 ||
    targetChargeLevel < startingChargeLevel ||
    startingChargeLevel > 100 ||
    targetChargeLevel > 100
  ) {
    return "Invalid Input";
  }

  const chargingTimeFull = batterySize / (chargingPower * 0.9) / 100;
  const requiredChargingTime =
    (targetChargeLevel - startingChargeLevel) * chargingTimeFull;

  const hoursOfcharging = Math.floor(requiredChargingTime);
  const minutesOfcharging = Math.floor(
    (requiredChargingTime - hoursOfcharging) * 60
  );

  return { hoursOfcharging, minutesOfcharging };
}
