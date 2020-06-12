import React from "react";
import styles from "./card.module.scss";
import { ReactComponent as HeartIcon } from "../../../assets/icons/heart.svg";

const Card = (props) => (
  <div className={styles.card}>
    <img src={props.imgURL} alt="item" />
    <span className={styles.title}>{props.title}</span>
    <span className={styles.brand}>{props.brand}</span>
    <div className={styles.priceContainer}>
      <span className={styles.price}>{props.price} EGP</span>
      {props.discount ? (
        <span className={styles.oldPrice}>{props.oldPrice} EGP</span>
      ) : null}
    </div>
    <div className={styles.cartContainer}>
      <button onClick={props.addToCart} className={styles.addBtn}>
        Add to cart
      </button>
      <HeartIcon />
    </div>
  </div>
);

export default Card;
