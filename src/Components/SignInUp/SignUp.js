import React from "react";

import Styles from "./SignInUp.module.css";

import { FormControlLabel, RadioGroup, Typography } from "@mui/material";
import StyledMUIInput from "./Helpers/StyledMUIInput";

import { useLocation, useHistory } from "react-router-dom";

import {
  MobileNumberTextMask,
  PinCodeTextMask,
  CustomisedRadio,
} from "./Helpers/StyledMUIInput";

import Button from "../Button";
import BottomText from "./Helpers/BottomText";

import { signUpData } from "../StaticData";
import { useDispatch } from "react-redux";

function SignUp() {
  const location = useLocation();
  const formRef = React.useRef(123);
  const history = useHistory();
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    textmask: "",
    numberformat: "",
    PinCode: "",
    Mobile: "",
  });

  const [isStationSelected, setIsStationSelected] = React.useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleDataValidation = () => {
    return true;
  };

  const signUp = async (e) => {
    e.preventDefault();
    handleDataValidation();
    fetchUserData();
  };

  const fetchUserData = async () => {};

  return (
    <div
      className={Styles.Wrapper}
      style={{
        transform:
          location.pathname === "/signup"
            ? "translatex(0)"
            : "translatex(100%)",
      }}
    >
      <div className={Styles.UpperSection}>
        <span className={Styles.Title}>{signUpData.title}</span>
        <form ref={formRef} className={Styles.Form} onSubmit={signUp}>
          <StyledMUIInput fullWidth id="Name" label="Name" variant="standard" />
          <StyledMUIInput
            fullWidth
            id="SignUpEmail"
            label="Email address"
            variant="standard"
            type="email"
            margin="dense"
            autoComplete="username"
          />
          <StyledMUIInput
            fullWidth
            id="State"
            label="State"
            variant="standard"
            margin="dense"
          />
          <StyledMUIInput
            fullWidth
            id="City"
            label="City/Town"
            variant="standard"
            margin="dense"
          />

          <StyledMUIInput
            fullWidth
            label="Mobile ( Optional )"
            value={values.Mobile}
            onChange={handleChange}
            name="Mobile"
            id="MobileSignUp"
            InputProps={{
              inputComponent: MobileNumberTextMask,
            }}
            variant="standard"
            margin="dense"
          />
          <StyledMUIInput
            fullWidth
            id="SignUpPassword"
            label="Password"
            variant="standard"
            type="password"
            margin="dense"
            autoComplete="current-password"
          />
          <RadioGroup
            row
            aria-label="Type"
            defaultValue="User"
            name="UserType"
            className={Styles.RadioWrapper}
            onChange={(e) => {
              setIsStationSelected(e.target.value === "Station");
            }}
          >
            <FormControlLabel
              value="User"
              control={<CustomisedRadio />}
              label={
                <Typography
                  sx={{ fontSize: "var(--font-16)", fontWeight: 500 }}
                >
                  User
                </Typography>
              }
            />
            <FormControlLabel
              value="Station"
              control={<CustomisedRadio />}
              label={
                <Typography
                  sx={{ fontSize: "var(--font-16)", fontWeight: 500 }}
                >
                  Station
                </Typography>
              }
            />
          </RadioGroup>
          {isStationSelected ? (
            <>
              <StyledMUIInput
                fullWidth
                id="Address"
                label="Address"
                variant="standard"
                margin="dense"
              />
              <StyledMUIInput
                fullWidth
                id="URL"
                label="Google map embed URL"
                variant="standard"
                margin="dense"
                type="url"
                autoComplete="url"
              />
            </>
          ) : null}
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
        <BottomText data={signUpData} />
      </div>
    </div>
  );
}

export default SignUp;
