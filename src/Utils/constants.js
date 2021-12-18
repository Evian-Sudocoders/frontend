const BASE_URL = "https://evian.azurewebsites.net/api/v1";
const AUTH_URL = `${BASE_URL}/auth`;
const STATION_URL = `${BASE_URL}/station`;
const BOOKING_URL = `${BASE_URL}/booking`;

export const SIGNUP_USER_URL = `${AUTH_URL}/signupuser`;
export const SIGNUP_STATION_URL = `${AUTH_URL}/signupstation`;
export const GET_USER_URL = `${AUTH_URL}/getUserDetails`;
export const GET_STATION_URL = `${STATION_URL}`;
export const INITIALIZE_BOOKING_URL = `${BOOKING_URL}/initializeBooking`;
export const VERIFY_BOOKING_URL = `${BOOKING_URL}/verifyBooking`;
