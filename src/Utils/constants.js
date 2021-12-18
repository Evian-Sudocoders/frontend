const BASE_URL = "https://evian.azurewebsites.net/api/v1";
const AUTH_URL = `${BASE_URL}/auth`;
const STATION_URL = `${BASE_URL}/station`;
const BOOKING_URL = `${BASE_URL}/booking`;
const USER_URL = `${BASE_URL}/user`;

export const SIGNUP_USER_URL = `${AUTH_URL}/signupuser`;
export const SIGNUP_STATION_URL = `${AUTH_URL}/signupstation`;
export const GET_USER_URL = `${AUTH_URL}/getUserDetails`;

export const INITIALIZE_BOOKING_URL = `${BOOKING_URL}/initializeBooking`;
export const VERIFY_BOOKING_URL = `${BOOKING_URL}/verifyBooking`;
export const GET_STATION_URL = `${AUTH_URL}/getStationDetails`;
export const UPDATE_PROFILE_PICTURE_URL = `${USER_URL}/updateProfilePicture`;
export const UPDATE_ADDRESS_URL = `${STATION_URL}/updateAddress`;
