import React from "react";
import styles from "./Footer.module.scss";
import { ReactComponent as FacebookIcon } from "../../../assets/icons/facebookfooter.svg";
import { ReactComponent as InstagramIcon } from "../../../assets/icons/instagramfooter.svg";
import data from "../../../services/missingData.json"
const footer = () => (
  <div className={styles.footer}>
    <div className={styles.footerInfo}>
      <div className={styles.description}>
        <img src="/images/fortune/missingImages/menu/Rectangle.png" alt="logo" />
        <p>
          {data.footer.footerInfo}
        </p>
      </div>
      <div className={styles.contact}>
        <h3>Contact Us</h3>
        <p>
          {data.footer.contactInfo}
        </p>
        <div className={styles.icons}>
          <FacebookIcon/>
          <InstagramIcon/>
        </div>
      </div>
    </div>
    <hr></hr>
    <div className={styles.copyrights}>
      <p>&copy; Fortune.Inc</p>
      <div className={styles.image}>
        <span>Powerd by</span> <img src="/images/fortune/missingImages/Rectangle134.png" alt="NasNav Logo" />
      </div>
    </div>
  </div>
);

export default footer;
