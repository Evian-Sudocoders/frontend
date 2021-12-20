import React from "react";

import styles from "./Highlight.module.css";
import HighlightIndividual from "../HighlightIndividual/HighlightIndividual";

function Highlight({ highlightData }) {
  return (
    <div className={styles.HighlightContainer}>
      <HighlightIndividual
        wrapperClass={styles.HighlightInstance}
        highlightTitle="total bookings"
        highlightNumber={highlightData[0]}
        key={1}
      />
      <HighlightIndividual
        wrapperClass={styles.HighlightInstance}
        highlightTitle="Total Earnings"
        highlightNumber={highlightData[1]}
        key={2}
      />
      <HighlightIndividual
        wrapperClass={styles.HighlightInstance}
        highlightTitle="Last Month Earnings"
        highlightNumber={highlightData[2]}
        key={3}
      />
    </div>
  );
}

export default Highlight;
