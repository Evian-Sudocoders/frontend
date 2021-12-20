import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./StationInfo.module.css";

import Navbar from "./../../Components/Navbar";
import UpperContainer from "../../Components/StationInfo/UpperContainer";
import LowerContainer from "../../Components/StationInfo/LowerContainer";
import PaymentPopup from "../../Components/StationInfo/PaymentPopup";
import PopUp from "./../../Components/PopUp";
import {
  getBookedSlot,
  getStationDataById,
} from "./../../Services/station.service";
import Preloader from "../../Components/Preloader/Preloader";

const tempData = {
  StationName: "Loremi psum Electric Vehicle Charging Station",
  StationAddress:
    "Opp Virwani Ind Est Jay Bharat Indl Est 2nd Flr, 44, Goregaon (east), Mumbai - 123456",
  GMapLink:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28627.009382883312!2d78.174139!3d26.249452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf834069adc0c9b89!2sIndian%20Institute%20of%20Information%20Technology%20and%20Management%20Gwalior!5e0!3m2!1sen!2sin!4v1639635854457!5m2!1sen!2sin",
  NumberOfPorts: "14",
};

function StationInfo() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [stationData, setStationData] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [popupInfo, setPopupInfo] = useState({
    price: 0,
    power: 0,
  });
  const [slotNumber, setSlotNumber] = useState(1);
  const { stationID } = useParams();

  useEffect(() => {
    fetchStationData();
  }, []);

  const fetchStationData = async () => {
    const data = await getStationDataById(stationID);
    setStationData(data);
  };

  useEffect(() => {
    handleBookedSlots();
  }, [slotNumber]);

  const handleBookedSlots = async () => {
    const data = await getBookedSlot(stationID, slotNumber);
    setBookedSlots(data.bookedSlots);
  };

  const setData = (data) => {
    setPopupInfo(data);
  };
  return (
    <>
      {stationData ? (
        <>
          <Navbar />
          <div className={styles.Wrapper}>
            <UpperContainer
              StationName={stationData?.name}
              StationAddress={stationData?.address}
              GMapLink={stationData?.location}
              NumberOfPorts={stationData?.chargingPoints?.length}
            />
            <LowerContainer
              isPopUpOpen={setIsPopUpOpen}
              priceSet={setData}
              chargingPoints={stationData?.chargingPoints}
              setslot={setSlotNumber}
            />
          </div>
          <PopUp
            ContentComp={
              <PaymentPopup
                price={popupInfo.price}
                power={popupInfo.power}
                slotNumber={slotNumber}
                bookedSlot={bookedSlots}
                isOpen={setIsPopUpOpen}
              />
            }
            isOpen={isPopUpOpen}
            closeFun={() => {
              setIsPopUpOpen(false);
            }}
            isClosable={true}
          />
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default StationInfo;
