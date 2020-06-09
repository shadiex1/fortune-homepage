import React, { Component } from "react";
import styles from "./productsOverview.module.scss";
import Carousel from 'nuka-carousel';
import Card from "../card/card"

import productimg1 from "../../../assets/products/Component1.png"
import productimg2 from "../../../assets/products/Component2.png"
import productimg3 from "../../../assets/products/Component3.png"
import productimg4 from "../../../assets/products/Component4.png"
class ProductsOverview extends Component {
    state={
        products : [
            {imgURL:productimg1,title:"Wanted set EDT 100 ML +  ",brand:"AZZARO" , price:"1,900 EGP"},
            {imgURL:productimg2,title:"Clarins Super restorative total eye CO",brand:"CLARINS" , price:"1,750 EGP" , oldPrice:"2000 EGP"},
            {imgURL:productimg3,title:"Armani code absolu homme EDP 110 ML Deo Spray ...",brand:"GIORGIO ARMANI" , price:"2,599 EGP"},
            {imgURL:productimg4,title:"Givenchy make-up le rouge NO. 306 ",brand:"GIVENCHY" , price:"835 EGP" ,oldPrice:"1,000 EGP"},
            {imgURL:productimg1,title:"Wanted set EDT 100 ML + ",brand:"AZZARO" , price:"1,900 EGP"},
            {imgURL:productimg3,title:"Armani code absolu homme EDP 110 ML Deo Spray ...",brand:"GIORGIO ARMANI" , price:"2,599 EGP"}
        ]
    }
    render(){
        return (
                <div className={styles.productsOverview}>
                    <div className={styles.newArrivals}>
                        
                        <h3 className={styles.header}>New Arrivals</h3>
                        <div className={styles.categories}>
                        <span className={styles.category}>Women</span>
                        <span className={styles.category}>Men</span>
                        </div>
                        

                        <Carousel
                        slidesToShow={4}
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
                            {this.state.products.map(({imgURL,title,brand,price,oldPrice})=>(
                                <Card discount imgURL={imgURL} title={title} brand={brand} price={price} oldPrice={oldPrice}/>
                            ))}
                        </Carousel>
                        <button className={styles.viewBtn}>View all  <span className={styles.arrows}>>></span></button>
                    </div>
                    <div className={styles.newArrivals}>
                        
                        <h3 className={styles.header}>Best Seller</h3>
                        <div className={styles.categories}>
                        <span className={styles.category}>Women</span>
                        <span className={styles.category}>Men</span>
                        </div>
                        

                        <Carousel
                        slidesToShow={4}
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
                            {this.state.products.map(({imgURL,title,brand,price,oldPrice})=>(
                                <Card discount imgURL={imgURL} title={title} brand={brand} price={price} oldPrice={oldPrice}/>
                            ))}
                        </Carousel>
                        <button className={styles.viewBtn}>View all  <span className={styles.arrows}>>></span></button>
                    </div>
                </div>
        )
    }
}

export default ProductsOverview