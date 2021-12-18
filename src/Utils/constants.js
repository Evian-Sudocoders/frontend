const BASE_URL = "https://evian.azurewebsites.net/api/v1";
const AUTH_URL = `${BASE_URL}/auth`;
const STATION_URL = `${BASE_URL}/station`;

export const SIGNUP_USER_URL = `${AUTH_URL}/signupuser`;
export const SIGNUP_STATION_URL = `${AUTH_URL}/signupstation`;
export const GET_USER_URL = `${AUTH_URL}/getUserDetails`;
export const GET_STATION_URL = `${STATION_URL}`;
