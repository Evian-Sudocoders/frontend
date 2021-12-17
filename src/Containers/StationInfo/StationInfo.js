import React, { useState } from "react";

import styles from "./StationInfo.module.css";

import Navbar from "./../../Components/Navbar";
import UpperContainer from "../../Components/StationInfo/UpperContainer";
import LowerContainer from "../../Components/StationInfo/LowerContainer";
import PaymentPopup from "../../Components/StationInfo/PaymentPopup";
import PopUp from "./../../Components/PopUp";

const tempData = {
  StationName: "Loremi psum Electric Vehicle Charging Station",
  StationAddress:
    "Opp Virwani Ind Est Jay Bharat Indl Est 2nd Flr, 44, Goregaon (east), Mumbai - 123456",
  GMapLink:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28627.009382883312!2d78.174139!3d26.249452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf834069adc0c9b89!2sIndian%20Institute%20of%20Information%20Technology%20and%20Management%20Gwalior!5e0!3m2!1sen!2sin!4v1639635854457!5m2!1sen!2sin",
  NumberOfPorts: "14",
};

function StationInfo() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(true);

  return (
    <>
      <div className={styles.Wrapper}>
        <Navbar />
        <UpperContainer
          StationName={tempData.StationName}
          StationAddress={tempData.StationAddress}
          GMapLink={tempData.GMapLink}
          NumberOfPorts={tempData.NumberOfPorts}
        />
        <LowerContainer />
      </div>
      <PopUp
        ContentComp={<PaymentPopup price={15} />}
        isOpen={isPopUpOpen}
        closeFun={() => {
          setIsPopUpOpen(false);
        }}
        isClosable={false}
      />
    </>
  );
}

export default StationInfo;
