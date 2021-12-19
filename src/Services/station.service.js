import axios from "axios";

import {
  UPDATE_PROFILE_PICTURE_URL,
  UPDATE_ADDRESS_URL,
  GET_ALL_STATION_URL,
  CHARGING_POINT_URL,
  STATION_URL,
  UPDATE_CHARGING_POINTS_INFO_URL,
} from "../Utils/constants";

export const getStationDataById = async (stationId) => {
  try {
    const { data } = await axios.get(STATION_URL + "/" + stationId);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProfilePicture = async (imageUrl, accessToken) => {
  try {
    const { data } = await axios.put(
      UPDATE_PROFILE_PICTURE_URL,
      {
        imageUrl,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
};

export const updateStationInfo = async (address, accessToken) => {
  try {
    const { data } = await axios.put(
      UPDATE_ADDRESS_URL,
      {
        ...address,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
};

export const updateChargingPointInfo = async (chargingPoints, accessToken) => {
  try {
    const { data } = await axios.put(
      UPDATE_CHARGING_POINTS_INFO_URL,
      {
        chargingPoints,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
};

export const addChargingPoints = async (chargingPoints, accessToken) => {
  try {
    const { data } = await axios.post(
      UPDATE_CHARGING_POINTS_INFO_URL,
      {
        chargingPoints,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data;
  } catch (err) {
    throw err;
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
