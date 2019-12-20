import React from "react";
import preloader from "../../../assets/images/preloader.gif";
import styles from "./preloader.module.css";

let Preloader = () => {
    return <img src={preloader} className={styles.preloader} />
}

export default Preloader;