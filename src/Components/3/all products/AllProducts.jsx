import React, { Component } from "react";
import styles from "./AllProducts.module.scss";


import data from "../../../services/missingData.json";
import Card from "../card/card";

class AllProducts extends Component {
  state = {
    data
    
  };
  render() {
    return (
      <div className={styles.all}>
        <span className={styles.title}>FOR HIM & HER MUST-HAVES</span>
        <div className={styles.productsGallery}>
          {this.state.data.products.map((item) => (
            <Card
              addToCart={() => this.props.addItem(item)}
              key={item.id}
              discount={item.discount}
              imgURL={item.imgURL}
              title={item.title}
              brand={item.brand}
              price={item.price}
              oldPrice={item.oldPrice}
            />
          ))}
        </div>
        <button className={styles.viewBtn}>
          View all <span className={styles.arrows}>{">>"}</span>
        </button>
      </div>
    );
  }
}

export default AllProducts;
