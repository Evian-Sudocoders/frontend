import React from "react";
import styles from "./LandingPage.module.css";
import Button from "../../Button";

function LandingPage() {
  const history = useHistory();

  const goToSignUp = () => {
    history.push("/signup");
  };

  const goToSignIn = () => {
    history.push("/signin");
  };

  return(
      <>
      </>
  );
}

export default LandingPage;


