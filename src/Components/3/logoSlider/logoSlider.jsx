import React, { Component } from "react";
import styles from "./logoSlider.module.scss";
import Carousel from "nuka-carousel";



class logoSlider extends Component{
  state = {
    width:  1100,
     height: 182
   };
 
   updateDimensions() {
     if(window.innerWidth < 500) {
       this.setState({ width: 450, height: 102 });
     } else {
       let update_width  = window.innerWidth-100;
       let update_height = Math.round(update_width/4.4);
       this.setState({ width: update_width, height: update_height });
     }
   }
 
 
   componentDidMount() {
     this.updateDimensions();
     window.addEventListener("resize", this.updateDimensions.bind(this));
   }
 
   componentWillUnmount() {
     window.removeEventListener("resize", this.updateDimensions.bind(this));
   }
   render() {
     let slides=0    
     
 
     this.state.width > 800 ?  slides=2:  slides = 3    
      this.state.width > 1100 ?  slides=4 :  slides = 3
 
      if (this.state.width > 1100 ){
        slides=6
      }else if (this.state.width > 800){
        slides =4
      }else if (this.state.width > 500){
        slides=2
      }else slides=1 
      return(
        <div className={styles.logoSlider}>
    <Carousel
      wrapAround
      autoplay
      slidesToShow={slides}
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
      )}}

  


export default logoSlider;
