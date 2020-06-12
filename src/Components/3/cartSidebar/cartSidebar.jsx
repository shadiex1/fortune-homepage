import React from "react";
import styles from "./cartSidebar.module.scss";
import CartItem from "../cartItem/cartItem";
import Backdrop from "../backdrop/backdrop";
import { ReactComponent as CartIcon } from "../../../assets/icons/shopperred.svg";

const cartSidebar = (props) => {
  let attachdstyles = [styles.sidebar, styles.Close];
  if (props.open) {
    attachdstyles = [styles.sidebar, styles.Open];
  }
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachdstyles.join(" ")}>
        <div className={styles.title}>
          <div className={styles.cart}>
            <CartIcon className={styles.cartIcon} />
            <span>My cart</span>
          </div>

          <i onClick={props.closed} className="fas fa-times"></i>
        </div>

        <div className={styles.item}>
          {props.cart.length ? (
            props.cart.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                title={cartItem.title}
                brand={cartItem.brand}
                imgURL={cartItem.imgURL}
                price={cartItem.price}
                quantity={cartItem.quantity}
                add={props.increaseQuantity}
              />
            ))
          ) : (
            <div className={styles.message}>Your cart is empty</div>
          )}
        </div>
        {props.cart.length ? (
          <button className={styles.redBtn}>Go to cart</button>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default cartSidebar;
