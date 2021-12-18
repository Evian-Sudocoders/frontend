import React from "react";

import Styles from "./UserBookingList.module.css";
import UserBookingCard from "./UserBookingCard";

const title = "Your Bookings";

function UserBookingList({ bookings, openBookingSlide }) {
  return (
    <div className={Styles.Wrapper}>
      <div className={Styles.Title}>{title}</div>
      <div className={Styles.ListWrapper}>
        {bookings.map((item, index) => (
          <div
            key={item.id}
            className={Styles.ItemWrapper}
            onClick={() => {
              if (openBookingSlide) {
                openBookingSlide(item.id, index);
              }
            }}
          >
            <UserBookingCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserBookingList;
