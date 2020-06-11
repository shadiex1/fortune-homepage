import React from "react";
import styles from "./userDropdown.module.scss";
import Backdrop from "../backdrop/backdrop";
import { ReactComponent as GoogleIcon } from "../../../assets/icons/ui.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/icons/facebook.svg";

const userDropdown = (props) => (
  <React.Fragment>
    <Backdrop show={props.open} clicked={props.closed} />
    <div className={styles.user}>
      <h3>Sign in</h3>

      <div className={styles.formGroup}>
        <label>Email</label>
        <input type="email" />
      </div>
      <div className={styles.formGroup}>
        <label>Password</label>
        <input type="password" />
      </div>
      <div className={styles.remember}>
        <div>
          <input type="checkbox" />
          <label>Remember me</label>
        </div>
        <span>Forget password?</span>
      </div>
      <button className={styles.signIn}>Sign in</button>
      <button className={styles.facebook}>
        {" "}
        <FacebookIcon /> Log in with facebook
      </button>
      <button className={styles.google}>
        {" "}
        <GoogleIcon /> Log in with Google account
      </button>
      <button className={styles.signUp}>Sign up</button>
    </div>
  </React.Fragment>
);

export default userDropdown;
