import React from "react";

import styles from "./PaymentHistoryIndividual.module.css";
import useMediaQuery from "./../../../../Utils/helper/useMediaQuery";

function PaymentHistoryIndividual({ paymentDetails }) {
  const [windowWidthState] = useMediaQuery();

  return (
    <div className={styles.PaymentHistoryIndividualWrapper}>
      <p className={styles.PaymentUserName}>{paymentDetails.userName}</p>
      <p className={styles.PaymentAmount}>
        {" "}
        {`₹ ${paymentDetails.totalAmount}`}
      </p>
      <p className={styles.PaymentTimestamp}>
        {windowWidthState > 500
          ? paymentDetails.startDate.toLocaleString()
          : paymentDetails.startDate.toLocaleString().split(",")[0]}
      </p>
    </div>
  );
}

export default PaymentHistoryIndividual;
