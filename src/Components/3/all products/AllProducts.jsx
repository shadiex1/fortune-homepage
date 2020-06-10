import React, { Component } from "react"
import styles from "./AllProducts.module.scss";


import productimg1 from "../../../assets/products/Component1.png"
import productimg2 from "../../../assets/products/Component2.png"
import productimg3 from "../../../assets/products/Component3.png"
import productimg4 from "../../../assets/products/Component4.png"
import Card from "../card/card";

class AllProducts extends Component {
    state={
        products:[
            {id:1,imgURL:productimg1,title:"Wanted set EDT 100 ML +  ",brand:"AZZARO" , price:"1,900 EGP"},
            {id:2,imgURL:productimg2,title:"Clarins Super restorative total eye CO",brand:"CLARINS" , price:"1,750 EGP" , oldPrice:"2000 EGP"},
            {id:3,imgURL:productimg3,title:"Armani code absolu homme EDP 110 ML Deo Spray ...",brand:"GIORGIO ARMANI" , price:"2,599 EGP"},
            {id:4,imgURL:productimg4,title:"Givenchy make-up le rouge NO. 306 ",brand:"GIVENCHY" , price:"835 EGP" ,oldPrice:"1,000 EGP"},
            {id:5,imgURL:productimg1,title:"Wanted set EDT 100 ML +  ",brand:"AZZARO" , price:"1,900 EGP"},
            {id:6,imgURL:productimg2,title:"Clarins Super restorative total eye CO",brand:"CLARINS" , price:"1,750 EGP" , oldPrice:"2000 EGP"},
            {id:7,imgURL:productimg3,title:"Armani code absolu homme EDP 110 ML Deo Spray ...",brand:"GIORGIO ARMANI" , price:"2,599 EGP"},
            {id:8,imgURL:productimg4,title:"Givenchy make-up le rouge NO. 306 ",brand:"GIVENCHY" , price:"835 EGP" ,oldPrice:"1,000 EGP"},
        ]
    }
    render(){
        return (
            <div className={styles.all}>
                <span className={styles.title}>FOR HIM & HER MUST-HAVES</span>
                <div className={styles.productsGallery}>
                    {this.state.products.map(item=>(
                                <Card addToCart={()=>this.props.addItem(item)} key={item.id} discount imgURL={item.imgURL} title={item.title} brand={item.brand} price={item.price} oldPrice={item.oldPrice}/>
                            ))}
                </div>
                <button className={styles.viewBtn}>View all  <span className={styles.arrows}>>></span></button>
            </div>
        )
    }
}

export default AllProducts