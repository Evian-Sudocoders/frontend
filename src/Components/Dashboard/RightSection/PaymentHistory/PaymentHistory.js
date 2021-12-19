import React from "react";

import styles from "./PaymentHistory.module.css";
import PaymentHistoryIndividual from "../PaymentHistoryIndividual/PaymentHistoryIndividual";

const paymentData = [
  {
    userName: "Joe Biden",
    amount: 650,
    timestamp: "03/12/2021 12:40PM",
  },
  {
    userName: "Atal Bihari Vajpayee",
    amount: 12500,
    timestamp: "03/12/2021 12:40PM",
  },
  {
    userName: "Joe Biden",
    amount: 198550,
    timestamp: "03/12/2021 12:40PM",
  },
];

function PaymentHistory({ paymentData = [] }) {
  const paymentHistoryHeadings = ["customer name", "amount(₹)", "date & time"];

  const paymentList = paymentData?.map((payment, index) => {
    return <PaymentHistoryIndividual paymentDetails={payment} key={index} />;
  });

  const paymentHistoryHeadingList = paymentHistoryHeadings.map((heading) => {
    return <p className={styles.PaymentHistoryHeading}>{heading}</p>;
  });

  return (
    <div className={styles.PaymentHistoryContainer}>
      <p className={styles.PaymentHistoryTitle}>Payment History</p>
      <div className={styles.PaymentHistoryHeadingContainer}>
        {paymentHistoryHeadingList}
      </div>
      <div className={styles.PaymentHistoryWrapper}>{paymentList}</div>
    </div>
  );
}

export default PaymentHistory;
