import React from "react";

import Styles from "./SignInUp.module.css";

import StyledMUIInput from "./Helpers/StyledMUIInput";

import { useLocation } from "react-router-dom";

import Button from "../Button";
import BottomText from "./Helpers/BottomText";

import { signInData } from "../StaticData.js";

function SignIn() {
  const location = useLocation();

  const fetchUserData = async () => {};

  async function SignIn(e) {
    e.preventDefault();
    // Signn up user here
    fetchUserData();
  }

  return (
    <div
      className={Styles.Wrapper}
      style={{
        transform:
          location.pathname === "/signin"
            ? "translatex(0)"
            : "translatex(100%)",
      }}
    >
      <div className={Styles.UpperSection}>
        <span className={Styles.Title}>{signInData.title}</span>
        <form className={Styles.Form} onSubmit={SignIn}>
          <StyledMUIInput
            fullWidth
            id="SignInEmail"
            label="Email address"
            variant="standard"
            type="email"
            margin="dense"
            autoComplete="username"
          />
          <StyledMUIInput
            fullWidth
            id="SignInPassword"
            label="Password"
            variant="standard"
            type="password"
            margin="dense"
            autoComplete="current-password"
          />
          <Button
            content="Continue"
            mainColor="linear-gradient(
              63.31deg,
              #00d1ff -9.99%,
              #06c4ff -9.98%,
              rgba(3, 195, 255, 0.23) 131.09%
            )"
            fontSize="var(--font-20)"
            wrapperClass={Styles.SignInUpButton}
          />
        </form>
      </div>
      <div className={Styles.BottomSecWrapper}>
        <BottomText data={signInData} />
      </div>
    </div>
  );
}

export default SignIn;
