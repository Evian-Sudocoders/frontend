import { UPDATE_USER_DATA, UPDATE_ACCESS_TOKEN } from "../ActionTypes";

export const userReducer = (
  state = {
    userData: null,
    uid: null,
    accessToken: null,
  },
  action
) => {
  switch (action.type) {
    case UPDATE_ACCESS_TOKEN: {
      return {
        ...state,
        accessToken: action.data.accessToken,
        uid: action.data.uid,
      };
    }

    case UPDATE_USER_DATA: {
      return {
        ...state,
        userData: action.data,
      };
    }
    default:
      return state;
  }
};
