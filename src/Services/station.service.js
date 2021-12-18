import axios from "axios";

import { GET_STATION_URL, GET_ALL_STATION_URL } from "../Utils/constants";

export const getStationData = async (accessToken, stationID) => {
  try {
    const { data } = await axios.get(`${GET_STATION_URL}/${stationID}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
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


