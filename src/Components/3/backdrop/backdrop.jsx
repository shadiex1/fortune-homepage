import React from "react";
import styles from "./backdrop.module.scss";

const backdrop = props =>
  props.show ? (
    <div onClick={props.clicked} className={styles.Backdrop}></div>
  ) : null;

export default backdrop;
