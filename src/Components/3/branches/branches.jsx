import React from "react";
import styles from "./branches.module.scss";


const branches =()=>(
    <div className={styles.branches}>
        <div className={styles.description}>
            <span>Furtune Stores</span>
        </div>
        <div className={styles.viewBranches}>
            <button className={styles.btn} >
            <i class="fas fa-map-marker-alt"></i>
            <span>View Our Branches</span>
            </button>
        </div>
    </div>
)

export default branches