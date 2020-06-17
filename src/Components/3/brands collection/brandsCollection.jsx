import React from "react";
import styles from "./brandsCollection.module.scss";
import Carousel from "nuka-carousel";



const brandsCollection = () => (
  <div className={styles.brands}>
    <span>Brand's Collections</span>
    <Carousel
      wrapAround
      autoplay
      slidesToShow={1}
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
      <img src="/images/fortune/missingImages/brands/MaskGroup4.png" alt="brand"></img>
      <img src="/images/fortune/missingImages/brands/MaskGroup4.png" alt="brand"></img>
    
      
    </Carousel>
  </div>
);

export default brandsCollection;
