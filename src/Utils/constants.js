export const BASE_URL = "https://evian.azurewebsites.net/api/v1";
export const AUTH_URL = `${BASE_URL}/auth`;
export const STATION_URL = `${BASE_URL}/station`;
export const BOOKING_URL = `${BASE_URL}/booking`;
export const USER_URL = `${BASE_URL}/user`;
export const CHARGING_POINT_URL = `${BASE_URL}/chargingPoint/bookedSlots`;

export const SIGNUP_USER_URL = `${AUTH_URL}/signupuser`;
export const SIGNUP_STATION_URL = `${AUTH_URL}/signupstation`;
export const GET_USER_URL = `${AUTH_URL}/getUserDetails`;
export const GET_STATION_URL = `${STATION_URL}`;

export const GET_ALL_STATION_URL = `${STATION_URL}`;

export const INITIALIZE_BOOKING_URL = `${BOOKING_URL}/initializeBooking`;
export const VERIFY_BOOKING_URL = `${BOOKING_URL}/verifyBooking`;
export const UPDATE_PROFILE_PICTURE_URL = `${USER_URL}/updateProfilePicture`;
export const UPDATE_ADDRESS_URL = `${STATION_URL}/updateAddress`;
export const UPDATE_CHARGING_POINTS_INFO_URL = `${STATION_URL}/chargingPoints`;
