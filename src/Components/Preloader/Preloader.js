import React, { useEffect } from "react";

import Styles from "./Preloader.module.css";

import prelaoderImg from "../../Assets/_General/loader_trans_bg.gif";

function Preloader() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className={Styles.Wrapper}>
      <img src={prelaoderImg} alt="" className={Styles.Loader} />
    </div>
  );  
}

export default Preloader;
