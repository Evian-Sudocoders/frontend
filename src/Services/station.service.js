import axios from "axios";

import {
  GET_STATION_URL,
  UPDATE_PROFILE_PICTURE_URL,
  UPDATE_ADDRESS_URL,
} from "../Utils/constants";

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
