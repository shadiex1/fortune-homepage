import React from "react";
import styles from "./card.module.scss";

const Card = props => (
    <div className={styles.card}>
        <img src={props.imgURL} alt="item"/>
        <span className={styles.title}>{props.title}</span>
        <span className={styles.brand}>{props.brand}</span>
        <div className={styles.priceContainer}>
            <span className={styles.price}>{props.price}</span>
            {props.discount ? <span className={styles.oldPrice}>{props.oldPrice}</span>:null}
         </div>
         <div className={styles.cartContainer}>
              <button className={styles.addBtn}>Add to cart</button>
         <i className="far fa-heart"></i>
         </div>
        
        
    </div>
)

export default Card