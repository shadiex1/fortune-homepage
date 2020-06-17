import React, { Component } from "react";
import styles from "./productsOverview.module.scss";
import Carousel from "nuka-carousel";
import Card from "../card/card";
import data from "../../../services/missingData.json";
import { useMediaQuery } from 'react-responsive'


class ProductsOverview extends Component {
  state = {
   data,
   width:  800,
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

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    let slides=0
    this.state.width <= 1100 ?  slides=4 :  slides = 4
    this.state.width <= 800 ?  slides=3:  slides = 2
    this.state.width <= 600 ?  slides=2:  slides = 1
    
    return (
      <div className={styles.productsOverview}>
        <div className={styles.newArrivals}>
          <h3 className={styles.header}>New Arrivals</h3>
          <div className={styles.categories}>
            <span className={styles.category}>Women</span>
            <span className={styles.category}>Men</span>
          </div>

          <Carousel
            slidesToShow={slides}
            autoplay
            autoplayInterval="2000"
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
            {this.state.data.products.map((item) => (
              <Card
                key={item.id}
                addToCart={() => this.props.addItem(item)}
                discount={item.discount}
                imgURL={item.imgURL}
                title={item.title}
                brand={item.brand}
                price={item.price}
                oldPrice={item.oldPrice}
              />
            ))}
          </Carousel>
          <button className={styles.viewBtn}>
            View all <span className={styles.arrows}>{">>"}</span>
          </button>
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
              containerClassName: `${styles.container}`,
              nextButtonText: ">",
              prevButtonText: "<",
              prevButtonClassName: `${styles.prev}`,
              nextButtonClassName: `${styles.next}`,
              pagingDotsClassName: `${styles.pagingDots}`,
              pagingDotsContainerClassName: `${styles.pagingContainer}`,
            }}
          >
            {this.state.data.products.map((item) => (
              <Card
                key={item.id}
                addToCart={() => this.props.addItem(item)}
                discount={item.discount}
                imgURL={item.imgURL}
                title={item.title}
                brand={item.brand}
                price={item.price}
                oldPrice={item.oldPrice}
              />
            ))}
          </Carousel>
          <button className={styles.viewBtn}>
            View all <span className={styles.arrows}>{">>"}</span>
          </button>
        </div>
      </div>
    );
  }
}

export default ProductsOverview;
