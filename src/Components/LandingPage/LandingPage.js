import React from "react";
import styles from "./LandingPage.module.css";

import UpperSection from './UpperSection';
import LowerSection from './LowerSection';

function LandingPage() {
  // const history = useHistory();

  // const goToSignUp = () => {
  //   history.push("/signup");
  // };

  // const goToSignIn = () => {
  //   history.push("/signin");
  // };

  return(
      <>
      <UpperSection />
      <LowerSection />
      {/* <Footer /> */}
      </>
  );
}

export default LandingPage;


