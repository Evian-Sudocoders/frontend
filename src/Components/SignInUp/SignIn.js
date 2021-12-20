import React from "react";
import { useDispatch } from "react-redux";

import Styles from "./SignInUp.module.css";

import StyledMUIInput from "./Helpers/StyledMUIInput";

import { useLocation, useHistory } from "react-router-dom";

import Button from "../Button";
import BottomText from "./Helpers/BottomText";

import { signInData } from "../StaticData.js";
import { signInUser } from "../../Services/signInUp.service";
import { validateEmail } from "./Helpers/ValidateEmail";
import { getUser } from "./../../Services/user.service";
import { fetchAndSetUserData } from "./Helpers/updateState";
import notify from "../../Utils/helper/notifyToast";

function SignIn() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const formRef = React.useRef(123);

  const [isDisabled, setIsDisabled] = React.useState(false);

  const signIn = async (e) => {
    e.preventDefault();
    const inputValidation = handleDataValidation();
    const elements = formRef.current.elements;

    if (inputValidation) {
      setIsDisabled(true);
      const signinStatus = await signInUser({
        email: elements.SignInEmail.value,
        password: elements.SignInPassword.value,
      });

      if (signinStatus.status) {
        await fetchAndSetUserData(
          signinStatus.accessToken,
          signinStatus.uid,
          dispatch,
          history,
          signinStatus.message
        );
      } else {
        notify(signinStatus.message, "error");
      }

      setIsDisabled(false);
    }
  };

  const handleDataValidation = () => {
    if (
      !formRef.current.elements.SignInEmail.value ||
      !validateEmail(formRef.current.elements.SignInEmail.value)
    ) {
      notify("Please enter valid Email address", "warning");
      return false;
    }

    if (formRef.current.elements.SignInPassword.value.length < 6) {
      notify("Password should be atleast 6 characters long", "warning");
      return false;
    }

    return true;
  };

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
        <form className={Styles.Form} onSubmit={signIn} ref={formRef}>
          <StyledMUIInput
            fullWidth
            id="SignInEmail"
            label="Email address"
            variant="standard"
            type="email"
            margin="dense"
            autoComplete="username"
            disabled={isDisabled}
          />
          <StyledMUIInput
            fullWidth
            id="SignInPassword"
            label="Password"
            variant="standard"
            type="password"
            margin="dense"
            autoComplete="current-password"
            disabled={isDisabled}
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
