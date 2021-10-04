import React from "react";
import styles from "./Showcase.module.scss";
import Carousel from "nuka-carousel";

const Showcase = () => (
  <div className={styles.showcase}>
    <Carousel
      heightMode="max"
      autoplay
      wrapAround
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
      <img src={process.env.PUBLIC_URL+"/images/fortune/missingImages/MaskGroup1.png"}  alt="item" />
      <img src={process.env.PUBLIC_URL+"/images/fortune/missingImages/MaskGroup1.png"} alt="item" />
    </Carousel>
  </div>
);

export default Showcase;
