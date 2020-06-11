import React from "react";
import styles from "./vrPlaceholder.module.scss";
import bannerImg from "../../../assets/360@2x.png";

const vrPlaceholder = () => (
  <div className={styles.banner}>
    <img src={bannerImg} alt="360" />
  </div>
);

export default vrPlaceholder;
