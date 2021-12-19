import React, { useEffect } from "react";

import Styles from "./Preloader.module.css";

import prelaoderImg from "../../Assets/_General/loader_white_bg.gif";
import Video from "../../Assets/_General/loader_white_bg.mp4";

function Preloader() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className={Styles.Wrapper}>
      <video
        loop
        autostart="true"
        autoPlay
        muted
        src={Video}
        type="video/mp4"
        className={Styles.Loader}
      />
      {/* <img src={prelaoderImg} alt="" className={Styles.Loader} /> */}
    </div>
  );
}

export default Preloader;
