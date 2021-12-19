import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Styles from "./Profile.module.css";

import Navbar from "../../Components/Navbar/Navbar";
import About from "./../../Components/About";
import Preloader from "./../../Components/Preloader/Preloader";
import UserBookingList from "./../../Components/UserBookingList";
import StationChargingPointsList from "./../../Components/StationChargingPointsList/index";
import BookingDetails from "../../Components/BookingDetails/BookingDetails";
import { getUserBookings } from "../../Services/user.service";

function Profile() {
  const userData = useSelector((state) => state.userReducer.userData);

  const Location = useLocation();
  const history = useHistory();
  const [bookings, setBookings] = useState([]);
  const [bookingSlideDetails, setBookingSlideDetails] = useState({
    isOpen: false,
    bookingDetails: {
      id: 0,
      username: "",
      vehicle_number: "",
      station: ``,
      date: new Date(),
      address: ``,
      pointNo: 0,
      slots: [0],
      charges: 0,
      status: "success",
    },
  });

  useEffect(() => {
    fetchUserBookings();
  }, []);

  const fetchUserBookings = async () => {
    const response = await getUserBookings(userData.accessToken);
    console.log(response);
    setBookings(response.bookings);
  };

  const openBookingSlide = (id, index) => {
    console.log(id, index);
    setBookingSlideDetails({
      isOpen: true,
      bookingDetails: bookings[index],
    });
    history.push(`/booking`);
  };

  const bookingSlideWrapperRef = React.useRef(123);

  const handleBgOnClick = (e) => {
    if (bookingSlideWrapperRef.current === e.target) {
      closeBookingSlide();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key == "Escape") {
      closeBookingSlide();
    }
  };

  const closeBookingSlide = () => {
    setBookingSlideDetails({
      ...bookingSlideDetails,
      isOpen: false,
    });
    history.push("/profile");
  };

  const markSuccess = (id) => {
    // Mark booking as success
    // Refetch Data
    console.log(id);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {true ? (
        <div className={Styles.Wrapper}>
          <Navbar />
          <div className={Styles.SubWrapper}>
            <div className={Styles.LeftWrapper}>
              {userData.isStation ? (
                <StationChargingPointsList />
              ) : (
                <UserBookingList
                  openBookingSlide={openBookingSlide}
                  bookings={bookings}
                />
              )}
            </div>
            <div className={Styles.Line} />
            <div className={Styles.AboutWraper}>
              <About isStation={userData.isStation} userData={userData} />
            </div>
          </div>
          <div
            ref={bookingSlideWrapperRef}
            className={Styles.BookingSlideWrapper}
            onClick={handleBgOnClick}
            style={
              bookingSlideDetails.isOpen && Location.pathname == "/booking"
                ? {
                    background: "rgba(0, 0, 0, 0.4)",
                    pointerEvents: "all",
                  }
                : {
                    background: "none",
                    pointerEvents: "none",
                  }
            }
          >
            <BookingDetails
              isOpen={bookingSlideDetails.isOpen}
              markSuccessFun={markSuccess}
              bookingDetails={bookingSlideDetails.bookingDetails}
            />
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default Profile;
