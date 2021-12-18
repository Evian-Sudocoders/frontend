export const BASE_URL = "https://evian.azurewebsites.net/api/v1";
export const AUTH_URL = `${BASE_URL}/auth`;
export const STATION_URL = `${BASE_URL}/station`;
export const BOOKING_URL = `${BASE_URL}/booking`;
export const CHARGING_POINT_URL = `${BASE_URL}/chargingPoint/bookedSlots`;

export const SIGNUP_USER_URL = `${AUTH_URL}/signupuser`;
export const SIGNUP_STATION_URL = `${AUTH_URL}/signupstation`;
export const GET_USER_URL = `${AUTH_URL}/getUserDetails`;

export const INITIALIZE_BOOKING_URL = `${BOOKING_URL}/initializeBooking`;
export const VERIFY_BOOKING_URL = `${BOOKING_URL}/verifyBooking`;
