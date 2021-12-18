import axios from "axios";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { SIGNUP_USER_URL, SIGNUP_STATION_URL } from "../Utils/constants";

export const signUpUser = async ({ email, password, userData, isStation }) => {
  try {
    const auth = getAuth();
    const userCredentialResult = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const accessToken = userCredentialResult.user.accessToken;
    if (isStation) {
      const { data } = await axios.post(SIGNUP_STATION_URL, userData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } else {
      const { data } = await axios.post(SIGNUP_USER_URL, userData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }
    return {
      status: true,
      message: "Signup Successful",
      accessToken: accessToken,
    };
  } catch (error) {
    console.log(error.code);
    const message =
      error.code === "auth/email-already-in-use"
        ? "User with this email already exists, please login!"
        : "Something went wrong!";

    return {
      status: false,
      message: message,
    };
  }
};
