import React from "react";
import styles from "./vrPlaceholder.module.scss";

const vrPlaceholder = () => (
  <div className={styles.banner}>
    <img src={process.env.PUBLIC_URL + '/images/fortune/missingImages/360.png'} alt="360" />
  </div>
);

export default vrPlaceholder;
