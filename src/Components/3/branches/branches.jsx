import React from "react";
import styles from "./branches.module.scss";
import { ReactComponent as MapIcon } from "../../../assets/icons/signs.svg";

const branches = () => (
  <div className={styles.branches}>
    <div className={styles.description}>
      <span>Furtune Stores</span>
    </div>
    <div className={styles.viewBranches}>
      <button className={styles.btn}>
        <MapIcon />
        <span>View Our Branches</span>
      </button>
    </div>
  </div>
);

export default branches;
