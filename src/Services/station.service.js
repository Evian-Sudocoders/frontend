import axios from "axios";

import { GET_STATION_URL } from "../Utils/constants";

export const getStationData = async (accessToken) => {
  try {
    const { data } = await axios.get(GET_STATION_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};
