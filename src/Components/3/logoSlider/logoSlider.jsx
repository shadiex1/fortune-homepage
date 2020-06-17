import React from "react";
import styles from "./logoSlider.module.scss";
import Carousel from "nuka-carousel";



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
      <img className={styles.logoImg} src="/images/fortune/missingImages/logos/logo1.png" alt="logo" />
      <img className={styles.logoImg} src="/images/fortune/missingImages/logos/logo2.png" alt="logo" />
      <img className={styles.logoImg} src="/images/fortune/missingImages/logos/logo3.png" alt="logo" />
      <img className={styles.logoImg} src="/images/fortune/missingImages/logos/logo4.png" alt="logo" />
      <img className={styles.logoImg} src="/images/fortune/missingImages/logos/logo5.png" alt="logo" />
      <img className={styles.logoImg} src="/images/fortune/missingImages/logos/logo6.png" alt="logo" />
      <img className={styles.logoImg} src="/images/fortune/missingImages/logos/logo7.png" alt="logo" />
  
    </Carousel>
  </div>
);

export default logoSlider;
