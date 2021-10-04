import React from "react";
import styles from "./searchbar.module.scss";

const searcbar = (props)=>(
    <div className={styles.searchbar}>
        <div className={styles.search}>
            <input type="text"/>
            <button>search</button>
        </div>
        <div className={styles.close}>
            {/* <span onClick={props.closed}>close</span> */}
            <i onClick={props.closed} className="fas fa-times"></i>
        </div>
        
    </div>
)

export default searcbar