import React from "react";
import styles from "./Showcase.module.scss";
import Carousel from 'nuka-carousel';
import carousel1 from "../../../assets/MaskGroup1.png"


const Showcase =() => (
    <div className={styles.showcase}>
        <Carousel 
        heightMode="max"
        autoplay
        wrapAround
        defaultControlsConfig={{
            containerClassName:`${styles.container}`,
            nextButtonText:">",
            prevButtonText:"<",
            prevButtonClassName:`${styles.prev}`,
            nextButtonClassName:`${styles.next}`,
            pagingDotsClassName:`${styles.pagingDots}`,
            pagingDotsContainerClassName:`${styles.pagingContainer}`
           
        }}
        >
            <img src={carousel1} alt="item"/>
            <img src={carousel1} alt="item"/>
        </Carousel>
    </div>
)

export default Showcase