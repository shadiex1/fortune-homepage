import React from "react";
import styles from "./brandsCollection.module.scss";
import Carousel from "nuka-carousel";

import brands1 from "../../../assets/brands/MaskGroup4.png";
import brands2 from "../../../assets/brands/MaskGroup5.png";
import brands3 from "../../../assets/brands/MaskGroup6.png";

const brandsCollection = () => (
  <div className={styles.brands}>
    <span>Brand's Collections</span>
    <Carousel
      wrapAround
      autoplay
      slidesToShow={3}
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
      <img src={brands1} alt="brand"></img>
      <img src={brands2} alt="brand"></img>
      <img src={brands3} alt="brand"></img>
      <img src={brands2} alt="brand"></img>
      <img src={brands1} alt="brand"></img>
    </Carousel>
  </div>
);

export default brandsCollection;
