import axios from "axios";

import { STATION_URL, CHARGING_POINT_URL } from "../Utils/constants";

export const getStationDataById = async (stationId) => {
  try {
    const { data } = await axios.get(STATION_URL + "/" + stationId);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getBookedSlot = async (stationId, index) => {
  try {
    const { data } = await axios.get(
      CHARGING_POINT_URL + "/" + stationId + "/" + index
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
