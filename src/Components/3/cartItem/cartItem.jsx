import React from "react";
import styles from "./cartItem.module.scss";

const cartItem = (props) => (
  <div className={styles.item}>
    <div className={styles.itemInfo}>
      <img src={props.imgURL} alt="item" />
      <div className={styles.description}>
        <span>{props.title}</span>
        <br />
        <span className={styles.brand}>{props.brand}</span>
      </div>
    </div>
    <div className={styles.price}>
      <span>{props.price}</span>
      <div className={styles.quantity}>
        <span className={styles.sign}>-</span>
        <span className={styles.number}>{props.quantity}3</span>
        <span className={styles.sign}>+</span>
      </div>
    </div>
  </div>
);

export default cartItem;
