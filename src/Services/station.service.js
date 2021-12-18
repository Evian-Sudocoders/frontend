import axios from "axios";
import { GET_STATION_URL, GET_ALL_STATION_URL, CHARGING_POINT_URL, STATION_URL} from "../Utils/constants";

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

export const getAllStationData = async (state, city) => {
  try {
    const { data } = await axios.get(`${GET_ALL_STATION_URL}/${state}/${city}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};


