import React, { Component } from "react";
import styles from "./brandsCollection.module.scss";
import Carousel from "nuka-carousel";
import data from "../../../services/missingData.json"



class brandsCollection  extends Component{
  state = {
    data,
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
        slides=3
      }else if (this.state.width > 800){
        slides =2
      }else if (this.state.width > 500){
        slides=1
      }else slides=1
 
    return(

    
<div className={styles.brands}>
    <span>Brand's Collections</span>
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
      {data.brands.map(item=>(
        <img src={process.env.PUBLIC_URL+ item} alt="brand"/>
      ))}
    
      
    </Carousel>
  </div>
  )
  }
   }
  
  
;

export default brandsCollection;
