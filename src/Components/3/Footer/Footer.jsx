import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../../assets/menu/Rectangle.png";
import nasNavLogo from "../../../assets/Rectangle134.png"

const footer = () => (
  <div className={styles.footer}>
    <div className={styles.footerInfo}>
      <div className={styles.description}>
        <img src={logo} alt="logo" />
        <p>
          Fortune stores are one of the leading retailers in the field of
          perfumes, makeup and skin care, Fortune stores; Established in the
          Egyptian market since 1997. Powered by its vast experience in beauty &
          knowledge of client needs, Fortune offers professional and outstanding
          service and consultancy to create a unique experience for each client.
          Fortune….your world of beauty.
        </p>
      </div>
      <div className={styles.contact}>
        <h3>Contact Us</h3>
        <p>
          11907 - 154 st., Cairo, Egypt. +2 (123) 456 7890 info@fotune.com.eg
        </p>
        <div className={styles.icons}>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-instagram"></i>
        </div>
      </div>
    </div>
    <hr></hr>
    <div className={styles.copyrights}>
        <p>&copy; Fortune.Inc</p> 
        <div className={styles.image}>
             <span>Powerd by</span> <img src={nasNavLogo} alt="NasNav Logo"/>
        </div>
       
    </div>
  </div>
);


export default footer