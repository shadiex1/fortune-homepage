import React from "react";
import styles from "./navDropdown.module.scss";
import Backdrop from "../backdrop/backdrop";
import data from "../../../services/missingData.json"

const navDropdown = (props) => (
  <React.Fragment>
    <Backdrop show={props.open} clicked={props.closed} />
    <div className={styles.dropdown}>
      <div className={styles.categories}>
        <div className={styles.category}>
          <h3>FACE</h3>
          <ul>
            {data.baseNavItems.map(item=>(
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.category}>
          <h3>LIPS</h3>
          <ul>
            
            {data.baseNavItems.slice(0,5).map(item=>(
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.category}>
          <h3>EYES</h3>
          <ul>
            
            {data.baseNavItems.slice(0,7).map(item=>(
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.categoryImg}>
        <img src={ process.env.PUBLIC_URL+ "/images/fortune/missingImages/image69.png"} alt="category" />
      </div>
    </div>
  </React.Fragment>
);

export default navDropdown;
