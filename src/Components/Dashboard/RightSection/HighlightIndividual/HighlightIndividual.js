import React from "react";
import styles from "./HighlightIndividual.module.css";

function HighlightIndividual({
  wrapperClass,
  highlightTitle,
  highlightNumber,
}) {
  return (
    <div
      className={
        styles.HighlightIndividualContainer + " " + wrapperClass
      }
    >
      <p className={styles.HighlightIndividualTitle}>
        {highlightTitle}
      </p>
      <p className={styles.HighlightIndividualNumber}>
        {highlightTitle === "total subscriptions"
          ? highlightNumber
          : "₹" + highlightNumber}
      </p>
    </div>
  );
}

export default HighlightIndividual;
