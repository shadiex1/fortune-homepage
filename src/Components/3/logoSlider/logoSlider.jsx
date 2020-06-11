import React from "react";
import styles from "./logoSlider.module.scss";
import Carousel from "nuka-carousel";

import logo1 from "../../../assets/logos/logo1.png";
import logo2 from "../../../assets/logos/logo2.png";
import logo3 from "../../../assets/logos/logo3.png";
import logo4 from "../../../assets/logos/logo4.png";
import logo5 from "../../../assets/logos/logo5.png";
import logo6 from "../../../assets/logos/logo6.png";
import logo7 from "../../../assets/logos/logo7.png";

const logoSlider = () => (
  <div className={styles.logoSlider}>
    <Carousel
      wrapAround
      autoplay
      slidesToShow={6}
      defaultControlsConfig={{
        containerClassName: `${styles.container}`,
        nextButtonText: ">",
        prevButtonText: "<",
        prevButtonClassName: `${styles.prev}`,
        nextButtonClassName: `${styles.next}`,
        pagingDotsClassName: `${styles.pagingDots}`,
        pagingDotsContainerClassName: `${styles.pagingContainer}`,
      }}
    >
      <img className={styles.logoImg} src={logo1} alt="logo" />
      <img className={styles.logoImg} src={logo2} alt="logo" />
      <img className={styles.logoImg} src={logo3} alt="logo" />
      <img className={styles.logoImg} src={logo4} alt="logo" />
      <img className={styles.logoImg} src={logo5} alt="logo" />
      <img className={styles.logoImg} src={logo6} alt="logo" />
      <img className={styles.logoImg} src={logo7} alt="logo" />
    </Carousel>
  </div>
);

export default logoSlider;
