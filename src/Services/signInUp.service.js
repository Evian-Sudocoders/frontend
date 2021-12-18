import axios from "axios";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
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
      message: "Sign up Successful",
      accessToken: accessToken,
    };
  } catch (error) {
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

export const signInUser = async ({ email, password }) => {
  try {
    const auth = getAuth();
    const userCredentialResult = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const accessToken = userCredentialResult.user.accessToken;
    return {
      status: true,
      message: "Sign in Successful",
      accessToken: accessToken,
    };
  } catch (error) {
    const message =
      error.code === "auth/user-not-found"
        ? "User with this email does not exist, please signup!"
        : error.code === "auth/wrong-password"
        ? "Wrong email/password, please try again!"
        : "Something went wrong!";

    return {
      status: false,
      message: message,
    };
  }
};
